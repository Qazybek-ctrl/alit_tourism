import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Upload } from "lucide-react";
import api from "../../../Api";
import toast from "react-hot-toast";
import { useLanguage } from "../../../utility/LanguageContext";

export default function QuestionnaireForm() {
    const { t } = useLanguage();
    const [form, setForm] = useState({
        lastName: "",
        firstName: "",
        middleName: "",
        gender: "Male",
        dateOfBirth: "",
        placeOfBirth: "",
        citizenship: "",
        passportNumber: "",
        dateOfIssue: "",
        dateOfExpiry: "",
        countryOfIssue: "",
        addressKZStreet: "",
        addressKZBuilding: "",
        addressKZBlock: "",
        addressKZApartment: "",
        travelItinerary: "",
        workPlace: "",
        residenceCountry: "",
        residenceAddressAbroad: "",
        visaType: "Single-entry",
        visaPeriod: {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
        visaIssuanceCountry: "",
        visaIssuanceCity: "",
        travelHistory: "",
        phoneNumber: "",
        emailAddress: "",
        document: null,
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const RequiredLabel = ({ children }) => (
        <label className="text-[#22324A] font-medium flex items-center gap-1">
            {children} <span className="text-red-500">*</span>
        </label>
    );

    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const visaInvitationType = params.get("visaInvitationType");

    const countries = countryList().getData();

    const handleCountryChange = (field, value) => {
        setForm({ ...form, [field]: value.label });
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setForm({ ...form, document: e.target.files[0] });
    };

    const handleRangeChange = (ranges) => {
        setForm({ ...form, visaPeriod: ranges.selection });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!visaInvitationType) {
            toast.error(t("forms.questionnaireForm.errors.visaTypeRequired"), { duration: 3000 });
            return;
        }
        setLoading(true);

        try {
            const requiredFields = [
                "lastName",
                "firstName",
                "dateOfBirth",
                "passportNumber",
                "dateOfIssue",
                "dateOfExpiry",
                "countryOfIssue",
                "visaIssuanceCountry",
                "visaIssuanceCity",
                "travelHistory",
                "emailAddress",
                "phoneNumber",
            ];

            // Проверяем, есть ли пустые поля
            const emptyField = requiredFields.find(
                (field) => !form[field] || form[field].toString().trim() === ""
            );

            if (emptyField) {
                toast.error(t("forms.questionnaireForm.errors.fillEmptyFields"));
                setLoading(false);
                return;
            }

            // Проверка диапазона дат
            if (!form.visaPeriod.startDate || !form.visaPeriod.endDate) {
                toast.error(t("forms.questionnaireForm.errors.selectDates"));
                setLoading(false);
                return;
            }

            // Проверка на наличие документа
            if (!form.document) {
                toast.error(t("forms.questionnaireForm.errors.uploadDocument"));
                setLoading(false);
                return;
            }
            const formData = new FormData();
            Object.entries(form).forEach(([key, value]) => {
                if (key === "visaPeriod") {
                    formData.append("visaStartDate", value.startDate.toISOString());
                    formData.append("visaEndDate", value.endDate.toISOString());
                } else if (value instanceof File) {
                    formData.append(key, value);
                } else {
                    formData.append(key, value);
                }
            });
            formData.append("visaInvitationType", visaInvitationType);

            await api.post("/visa/invitation", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            toast.success(t("forms.questionnaireForm.success.submitted"));
            navigate("/profile");
        } catch (error) {
            console.error(error);
            toast.error(t("forms.questionnaireForm.errors.submitFailed"));
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            className="max-w-3xl mx-auto p-6 space-y-6 text-gotham text-[#22324A]  bg-[#FFFFFF] md:bg-[#F6F6F6] rounded-[30px] my-8">
            <h1 className="text-[#22324A] text-[38px] font-[500] text-gotham mb-6 text-center">
                {t("forms.questionnaireForm.title")}
            </h1>

            {/* ФИО */}
            <div className="grid md:grid-cols-3 gap-4">
                <div>
                    <RequiredLabel>{t("forms.questionnaireForm.lastName")}</RequiredLabel>
                    <input
                        name="lastName"
                        onChange={handleChange}
                        className="input"
                        placeholder={t("forms.questionnaireForm.lastNamePlaceholder")}
                        disabled={loading}
                    />
                </div>
                <div>
                    <RequiredLabel>{t("forms.questionnaireForm.firstName")}</RequiredLabel>
                    <input
                        name="firstName"
                        onChange={handleChange}
                        className="input"
                        placeholder={t("forms.questionnaireForm.firstNamePlaceholder")}
                        disabled={loading}
                    />
                </div>
                <div>
                    <RequiredLabel>{t("forms.questionnaireForm.middleName")}</RequiredLabel>
                    <input
                        name="middleName"
                        onChange={handleChange}
                        className="input"
                        placeholder={t("forms.questionnaireForm.middleNamePlaceholder")}
                        disabled={loading}
                    />
                </div>
            </div>

            {/* Gender */}
            <div className="flex flex-col md:flex-row md:items-end md:gap-10 w-full">
                {/* Gender */}
                <div className="flex flex-col gap-2 md:w-1/2">
                    <RequiredLabel>{t("forms.questionnaireForm.gender")}</RequiredLabel>
                    <div className="flex gap-4 mt-2">
                        <button
                            type="button"
                            onClick={() => setForm({ ...form, gender: "Male" })}
                            className={`px-4 py-2 border rounded ${form.gender === "Male" ? "bg-[#22324A] text-white" : ""
                                }`}
                            disabled={loading}
                        >
                            {t("forms.questionnaireForm.male")}
                        </button>
                        <button
                            type="button"
                            onClick={() => setForm({ ...form, gender: "Female" })}
                            className={`px-4 py-2 border rounded ${form.gender === "Female" ? "bg-[#22324A] text-white" : ""
                                }`}
                            disabled={loading}
                        >
                            {t("forms.questionnaireForm.female")}
                        </button>
                    </div>
                </div>

                {/* Date of Birth */}
                <div className="flex flex-col gap-2 md:w-1/2 mt-6 md:mt-0">
                    <RequiredLabel>{t("forms.questionnaireForm.dateOfBirth")}</RequiredLabel>
                    <div className="flex gap-2">
                        <input
                            type="date"
                            name="dateOfBirth"
                            onChange={handleChange}
                            className="input"
                            disabled={loading}
                        />
                    </div>
                </div>
            </div>

            {/* Место рождения и гражданство */}
            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <RequiredLabel>{t("forms.questionnaireForm.placeOfBirth")}</RequiredLabel>
                    <input
                        name="placeOfBirth"
                        onChange={handleChange}
                        className="input"
                        placeholder={t("forms.questionnaireForm.placeOfBirthPlaceholder")}
                        disabled={loading}
                    />
                </div>
                <div>
                    <RequiredLabel>{t("forms.questionnaireForm.citizenship")}</RequiredLabel>

                    <input
                        name="citizenship"
                        onChange={handleChange}
                        className="input"
                        placeholder={t("forms.questionnaireForm.citizenshipPlaceholder")}
                        disabled={loading}
                    />
                </div>
            </div>

            {/* Паспорт */}
            <div className="grid md:grid-cols-3 gap-4">
                <div>
                    <RequiredLabel>{t("forms.questionnaireForm.passportNumber")}</RequiredLabel>
                    <input
                        name="passportNumber"
                        onChange={handleChange}
                        className="input"
                        disabled={loading}
                    />
                </div>
                <div>
                    <RequiredLabel>{t("forms.questionnaireForm.dateOfIssue")}</RequiredLabel>
                    <input
                        type="date"
                        name="dateOfIssue"
                        onChange={handleChange}
                        className="input"
                        disabled={loading}
                    />
                </div>
                <div>
                    <RequiredLabel>{t("forms.questionnaireForm.dateOfExpiry")}</RequiredLabel>
                    <input
                        type="date"
                        name="dateOfExpiry"
                        onChange={handleChange}
                        className="input"
                        disabled={loading}
                    />
                </div>
            </div>

            {/* Страна выдачи */}
            <div>
                <RequiredLabel>{t("forms.questionnaireForm.countryOfIssue")}</RequiredLabel>
                <Select
                    options={countries}
                    onChange={(value) => handleCountryChange("countryOfIssue", value)}
                    classNames={{
                        control: () =>
                            "!border !border-gray-300 !rounded-xl !py-1 !px-2 !shadow-sm hover:!border-blue-400",
                        menu: () => "!rounded-xl !shadow-md !z-50",
                        singleValue: () => "!text-gray-700",
                    }}
                    disabled={loading}
                />
            </div>

            <div>
                <RequiredLabel>{t("forms.questionnaireForm.workPlace")}</RequiredLabel>
                <input
                    name="workPlace"
                    onChange={handleChange}
                    placeholder={t("forms.questionnaireForm.workPlacePlaceholder")}
                    className="input"
                    disabled={loading}
                />
            </div>

            {/* Адрес в Казахстане */}
            {/* Residential + Building */}
            <div className="flex flex-col gap-4">
                <div>
                    <RequiredLabel>
                        {t("forms.questionnaireForm.addressKZStreet")}
                    </RequiredLabel>
                    <input
                        name="addressKZStreet"
                        placeholder={t("forms.questionnaireForm.streetPlaceholder")}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-[#22324A]"
                        disabled={loading}
                    />
                </div>

                <div>
                    <RequiredLabel>{t("forms.questionnaireForm.building")}</RequiredLabel>
                    <input
                        name="addressKZBuilding"
                        placeholder={t("forms.questionnaireForm.buildingPlaceholder")}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-[#22324A]"
                        disabled={loading}
                    />
                </div>
            </div>

            {/* Block + Apartment */}
            <div className="mt-4">
                <RequiredLabel>
                    {t("forms.questionnaireForm.blockAndApartment")}
                </RequiredLabel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <input
                        name="addressKZBlock"
                        placeholder={t("forms.questionnaireForm.blockPlaceholder")}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#22324A]"
                        disabled={loading}
                    />
                    <input
                        name="addressKZApartment"
                        placeholder={t("forms.questionnaireForm.apartmentPlaceholder")}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#22324A]"
                        disabled={loading}
                    />
                </div>
            </div>

            <div>
                <RequiredLabel>{t("forms.questionnaireForm.travelItinerary")}</RequiredLabel>
                <input
                    name="travelItinerary"
                    onChange={handleChange}
                    placeholder=""
                    className="input"
                    disabled={loading}
                />
            </div>

            <div>
                <RequiredLabel>{t("forms.questionnaireForm.residenceCountryAbroad")}</RequiredLabel>
                <Select
                    options={countries}
                    onChange={(value) => handleCountryChange("residenceCountry", value)}
                    classNames={{
                        control: () =>
                            "!border !border-gray-300 !rounded-xl !py-1 !px-2 !shadow-sm hover:!border-blue-400",
                        menu: () => "!rounded-xl !shadow-md !z-50",
                        singleValue: () => "!text-gray-700",
                    }}
                    disabled={loading}
                />
            </div>

            <div>
                <RequiredLabel>{t("forms.questionnaireForm.residenceAddressAbroad")}</RequiredLabel>
                <input
                    name="residenceAddressAbroad"
                    onChange={handleChange}
                    placeholder={t("forms.questionnaireForm.residenceAddressPlaceholder")}
                    className="input"
                    disabled={loading}
                />
            </div>

            {/* Виза */}
            <div>
                <RequiredLabel>{t("forms.questionnaireForm.visaPeriod")}</RequiredLabel>
                <div className="mt-3">
                    <DateRange
                        ranges={[form.visaPeriod]}
                        onChange={handleRangeChange}
                        moveRangeOnFirstSelection={false}
                    />
                </div>
                <div className="mt-6">
                    <RequiredLabel>
                        {t("forms.questionnaireForm.visaType")}
                    </RequiredLabel>
                    <div className="flex gap-4 mt-1">
                        <button
                            type="button"
                            onClick={() => setForm({ ...form, visaType: "Single-entry" })}
                            className={`px-4 py-2 border rounded ${form.visaType === "Single-entry"
                                ? "bg-[#22324A] text-white"
                                : ""
                                }`}
                            disabled={loading}
                        >
                            {t("forms.questionnaireForm.singleEntry")}
                        </button>
                        <button
                            type="button"
                            onClick={() => setForm({ ...form, visaType: "Multiple-entry" })}
                            className={`px-4 py-2 border rounded ${form.visaType === "Multiple-entry"
                                ? "bg-[#22324A] text-white"
                                : ""
                                }`}
                            disabled={loading}
                        >
                            {t("forms.questionnaireForm.multipleEntry")}
                        </button>
                    </div>
                </div>
            </div>

            {/* Место выдачи визы */}
            <div>
                <RequiredLabel>{t("forms.questionnaireForm.visaIssuancePlace")}</RequiredLabel>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Select
                        options={countries}
                        onChange={(value) =>
                            handleCountryChange("visaIssuanceCountry", value)
                        }
                        className="w-full"
                        classNames={{
                            control: () =>
                                "!border !border-gray-300 !rounded-xl !py-1 !px-2 !shadow-sm hover:!border-blue-400",
                            menu: () => "!rounded-xl !shadow-md !z-50",
                            singleValue: () => "!text-gray-700",
                        }}
                        placeholder={t("forms.questionnaireForm.selectCountry")}
                        disabled={loading}
                    />

                    <input
                        name="visaIssuanceCity"
                        placeholder={t("forms.questionnaireForm.cityPlaceholder")}
                        onChange={handleChange}
                        className="input w-full"
                        disabled={loading}
                    />
                </div>
            </div>

            <div>
                <RequiredLabel>{t("forms.questionnaireForm.travelHistory")}</RequiredLabel>
                <input
                    name="travelHistory"
                    onChange={handleChange}
                    placeholder={t("forms.questionnaireForm.travelHistoryPlaceholder")}
                    className="input"
                    disabled={loading}
                />
            </div>

            {/* Контакты */}
            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <RequiredLabel>{t("forms.questionnaireForm.phoneNumber")}</RequiredLabel>
                    <PhoneInput
                        country={"kz"}
                        value={form.phoneNumber}
                        onChange={(value) => setForm({ ...form, phoneNumber: value })}
                        inputClass="!w-full !h-11 !pl-12 !rounded-xl !border !outline-none"
                        buttonClass="!rounded-l-xl"
                        disableCountryGuess={true}
                        disabled={loading}
                    />
                </div>

                <div>
                    <RequiredLabel>{t("forms.questionnaireForm.emailAddress")}</RequiredLabel>
                    <input
                        name="emailAddress"
                        type="email"
                        onChange={handleChange}
                        className="input"
                        disabled={loading}
                    />
                </div>
            </div>

            {/* Документ */}
            <div>
                <RequiredLabel>{t("forms.questionnaireForm.uploadDocument")}</RequiredLabel>

                <div
                    className="relative border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center
               hover:border-blue-500 transition-colors cursor-pointer bg-gray-50"
                    onClick={() => document.getElementById("fileInput").click()}
                >
                    <Upload className="mx-auto mb-3 text-gray-500" size={36} />
                    <p className="text-gray-700 font-medium">
                        {t("forms.questionnaireForm.uploadText")}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{t("forms.questionnaireForm.uploadHint")}</p>

                    <input
                        id="fileInput"
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                    />

                    {form.document && (
                        <div
                            className="mt-4 bg-white p-3 rounded-xl shadow-sm border flex items-center justify-center gap-2">
                            <Upload className="text-blue-500" size={20} />
                            <p className="text-gray-700 text-sm truncate">
                                {form.document.name}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <button
                type="submit"
                className="w-full bg-[#22324A] text-white py-3 rounded-lg font-[500]"
                onClick={handleSubmit}
                disabled={loading}
            >
                {t("forms.questionnaireForm.apply")}
            </button>
        </form>
    );
}
