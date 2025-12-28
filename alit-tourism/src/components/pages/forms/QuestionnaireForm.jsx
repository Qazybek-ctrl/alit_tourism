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

export default function QuestionnaireForm() {
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
            toast.error("Visa Invitation Type is required to proceed with booking", { duration: 3000 });
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
                toast.error(`Please fill out the empty fields`);
                setLoading(false);
                return;
            }

            // Проверка диапазона дат
            if (!form.visaPeriod.startDate || !form.visaPeriod.endDate) {
                toast.error("Please select visa start and end dates");
                setLoading(false);
                return;
            }

            // Проверка на наличие документа
            if (!form.document) {
                toast.error("Please upload your document");
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

            toast.success("Application submitted successfully!");
            navigate("/profile");
        } catch (error) {
            console.error(error);
            toast.error("❌ Failed to submit application");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            className="max-w-3xl mx-auto p-6 space-y-6 text-gotham text-[#22324A]  bg-[#FFFFFF] md:bg-[#F6F6F6] rounded-[30px] my-8">
            <h1 className="text-[#22324A] text-[38px] font-[500] text-gotham mb-6 text-center">
                Questionnaire for Kazakhstan Visa Invitation
            </h1>

            {/* ФИО */}
            <div className="grid md:grid-cols-3 gap-4">
                <div>
                    <RequiredLabel>Last Name</RequiredLabel>
                    <input
                        name="lastName"
                        onChange={handleChange}
                        className="input"
                        placeholder="Enter your last name"
                        disabled={loading}
                    />
                </div>
                <div>
                    <RequiredLabel>First Name</RequiredLabel>
                    <input
                        name="firstName"
                        onChange={handleChange}
                        className="input"
                        placeholder="Enter your first name"
                        disabled={loading}
                    />
                </div>
                <div>
                    <RequiredLabel>Middle Name</RequiredLabel>
                    <input
                        name="middleName"
                        onChange={handleChange}
                        className="input"
                        placeholder="Enter your middle name"
                        disabled={loading}
                    />
                </div>
            </div>

            {/* Gender */}
            <div className="flex flex-col md:flex-row md:items-end md:gap-10 w-full">
                {/* Gender */}
                <div className="flex flex-col gap-2 md:w-1/2">
                    <RequiredLabel>Gender</RequiredLabel>
                    <div className="flex gap-4 mt-2">
                        <button
                            type="button"
                            onClick={() => setForm({ ...form, gender: "Male" })}
                            className={`px-4 py-2 border rounded ${form.gender === "Male" ? "bg-[#22324A] text-white" : ""
                                }`}
                            disabled={loading}
                        >
                            Male
                        </button>
                        <button
                            type="button"
                            onClick={() => setForm({ ...form, gender: "Female" })}
                            className={`px-4 py-2 border rounded ${form.gender === "Female" ? "bg-[#22324A] text-white" : ""
                                }`}
                            disabled={loading}
                        >
                            Female
                        </button>
                    </div>
                </div>

                {/* Date of Birth */}
                <div className="flex flex-col gap-2 md:w-1/2 mt-6 md:mt-0">
                    <RequiredLabel>Date of Birth</RequiredLabel>
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
                    <RequiredLabel>Place of Birth</RequiredLabel>
                    <input
                        name="placeOfBirth"
                        onChange={handleChange}
                        className="input"
                        placeholder="City, Country"
                        disabled={loading}
                    />
                </div>
                <div>
                    <RequiredLabel>Citizenship</RequiredLabel>

                    <input
                        name="citizenship"
                        onChange={handleChange}
                        className="input"
                        placeholder="Enter your citizenship"
                        disabled={loading}
                    />
                </div>
            </div>

            {/* Паспорт */}
            <div className="grid md:grid-cols-3 gap-4">
                <div>
                    <RequiredLabel>Passport Number</RequiredLabel>
                    <input
                        name="passportNumber"
                        onChange={handleChange}
                        className="input"
                        disabled={loading}
                    />
                </div>
                <div>
                    <RequiredLabel>Date of Issue</RequiredLabel>
                    <input
                        type="date"
                        name="dateOfIssue"
                        onChange={handleChange}
                        className="input"
                        disabled={loading}
                    />
                </div>
                <div>
                    <RequiredLabel>Date of Expiry</RequiredLabel>
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
                <RequiredLabel>Country of Issue</RequiredLabel>
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
                <RequiredLabel>Place of Work and Position</RequiredLabel>
                <input
                    name="workPlace"
                    onChange={handleChange}
                    placeholder="Enter your work"
                    className="input"
                    disabled={loading}
                />
            </div>

            {/* Адрес в Казахстане */}
            {/* Residential + Building */}
            <div className="flex flex-col gap-4">
                <div>
                    <RequiredLabel>
                        Residential address in the Republic of Kazakhstan, street
                    </RequiredLabel>
                    <input
                        name="addressKZStreet"
                        placeholder="Street"
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-[#22324A]"
                        disabled={loading}
                    />
                </div>

                <div>
                    <RequiredLabel>Building</RequiredLabel>
                    <input
                        name="addressKZBuilding"
                        placeholder="Building"
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-[#22324A]"
                        disabled={loading}
                    />
                </div>
            </div>

            {/* Block + Apartment */}
            <div className="mt-4">
                <RequiredLabel>
                    Block and Apartment
                </RequiredLabel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <input
                        name="addressKZBlock"
                        placeholder="Block"
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#22324A]"
                        disabled={loading}
                    />
                    <input
                        name="addressKZApartment"
                        placeholder="Apartment"
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#22324A]"
                        disabled={loading}
                    />
                </div>
            </div>

            <div>
                <RequiredLabel>Travel itinerary in Kazakhstan</RequiredLabel>
                <input
                    name="travelItinerary"
                    onChange={handleChange}
                    placeholder=""
                    className="input"
                    disabled={loading}
                />
            </div>

            <div>
                <RequiredLabel>Country of residence abroad</RequiredLabel>
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
                <RequiredLabel>Residential Address Abroad</RequiredLabel>
                <input
                    name="residenceAddressAbroad"
                    onChange={handleChange}
                    placeholder="in English, country code, country name, full address"
                    className="input"
                    disabled={loading}
                />
            </div>

            {/* Виза */}
            <div>
                <RequiredLabel>Validity period of the requested visa</RequiredLabel>
                <div className="mt-3">
                    <DateRange
                        ranges={[form.visaPeriod]}
                        onChange={handleRangeChange}
                        moveRangeOnFirstSelection={false}
                    />
                </div>
                <div className="mt-6">
                    <RequiredLabel>
                        Do you need a Single-entry or Multiple-entry visa?
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
                            Single-entry
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
                            Multiple-entry
                        </button>
                    </div>
                </div>
            </div>

            {/* Место выдачи визы */}
            <div>
                <RequiredLabel>Place of visa issuance</RequiredLabel>

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
                        placeholder="Select country"
                        disabled={loading}
                    />

                    <input
                        name="visaIssuanceCity"
                        placeholder="City"
                        onChange={handleChange}
                        className="input w-full"
                        disabled={loading}
                    />
                </div>
            </div>

            <div>
                <RequiredLabel>Travel history for the last 5 years?</RequiredLabel>
                <input
                    name="travelHistory"
                    onChange={handleChange}
                    placeholder="Enter travel history for the last 5 years"
                    className="input"
                    disabled={loading}
                />
            </div>

            {/* Контакты */}
            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <RequiredLabel>Phone Number</RequiredLabel>
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
                    <RequiredLabel>Email Address</RequiredLabel>
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
                <RequiredLabel>Upload Document</RequiredLabel>

                <div
                    className="relative border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center
               hover:border-blue-500 transition-colors cursor-pointer bg-gray-50"
                    onClick={() => document.getElementById("fileInput").click()}
                >
                    <Upload className="mx-auto mb-3 text-gray-500" size={36} />
                    <p className="text-gray-700 font-medium">
                        Click to upload or drag & drop
                    </p>
                    <p className="text-sm text-gray-500 mt-1">PDF, JPG, PNG up to 10MB</p>

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
                Apply
            </button>
        </form>
    );
}
