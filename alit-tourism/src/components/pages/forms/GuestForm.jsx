import {useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";
import api from "../../../Api";
import toast from "react-hot-toast";

export default function GuestForm() {
    const [form, setForm] = useState({
        fullName: "",
        countryOfResidence: "",
        language: "",
        otherLanguage: "",
        visitPlan: "",
        peopleCount: "",
        tripInterests: "",
        otherInterest: "",
        request: "",
        dietaryPreferences: "",
    });

    const countries = countryList().getData();
    const navigate = useNavigate();

    const languages = ["English", "Russian", "Kazakh", "Arabic", "Other"];
    const interests = ["Culture", "Nature", "Adventure", "Shopping", "Other"];
    const dietaryOptions = ["Vegetarian", "Vegan", "Halal", "No Restrictions"];
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleCountryChange = (field, value) => {
        setForm({...form, [field]: value.label});
    };
    const {search} = useLocation();
    const params = new URLSearchParams(search);
    const id = params.get("id");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!id) {
            toast.error("Tour ID is required to proceed with booking", { duration: 3000 });
            return;
        }

        setLoading(true);

        try {
            const requiredFields = [
                "fullName",
                "countryOfResidence",
                "visitPlan",
                "peopleCount",
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

            const formData = new FormData();
            formData.append("tourId", id);
            Object.entries(form).forEach(([key, value]) => {
                formData.append(key, value);
            });

            await api.post("/form/guest", formData, {
                headers: {"Content-Type": "multipart/form-data"},
            });

            toast.success(
                <div>
                    <p>Application submitted successfully!</p>
                    <p className="text-sm text-gray-400">Our team will contact you soon, please wait.</p>
                </div>,
                { duration: 6000 }
            );
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
            className="max-w-6xl mx-auto p-6 md:p-10 space-y-6 text-[#22324A] bg-[#FFFFFF] md:bg-[#F6F6F6] rounded-[30px] my-8">
            <h1 className="text-[#22324A] text-[30px] md:text-[38px] font-[500] text-left md:text-center mb-10">
                Guest Information Form
            </h1>

            <div className="md:flex md:gap-10 md:items-start">
                {/* Левая часть — форма */}
                <div className="flex-1 space-y-6">
                    {/* Full Name */}
                    <div>
                        <label className="block font-medium mb-2">Full Name</label>
                        <input
                            name="fullName"
                            placeholder="Enter your full name"
                            onChange={handleChange}
                            className="input w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-1 focus:ring-[#22324A] outline-none"
                        />
                    </div>

                    {/* Country of Residence */}
                    <div>
                        <label className="block font-medium mb-2">
                            Country of Residence
                        </label>
                        <Select
                            options={countries}
                            onChange={(value) =>
                                handleCountryChange("countryOfResidence", value)
                            }
                            className="w-full"
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    minHeight: "44px",
                                    borderRadius: "0.75rem",
                                    borderColor: "#d1d5db",
                                    boxShadow: "none",
                                    "&:hover": {borderColor: "#22324A"},
                                }),
                            }}
                        />
                    </div>

                    {/* Preferred Language */}
                    <div>
                        <label className="block font-medium mb-2">
                            Preferred Language of Communication
                        </label>
                        <div className="flex flex-col gap-2">
                            {languages.map((lang) => (
                                <div key={lang}>
                                    <button
                                        type="button"
                                        onClick={() => setForm({...form, language: lang})}
                                        className={`w-full text-left px-4 py-2 border rounded-xl transition ${
                                            form.language === lang
                                                ? "bg-[#22324A] text-white"
                                                : "hover:bg-gray-300"
                                        }`}
                                    >
                                        {lang}
                                    </button>
                                    {form.language === "Other" && lang === "Other" && (
                                        <input
                                            name="otherLanguage"
                                            placeholder="Please specify"
                                            onChange={handleChange}
                                            className="input mt-2 border border-gray-300 rounded-xl px-4 py-2 w-full focus:ring-1 focus:ring-[#22324A] outline-none"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visit Plan */}
                    <div>
                        <label className="block font-medium mb-2">
                            When are you planning to visit Almaty, Kazakhstan?
                        </label>
                        <textarea
                            name="visitPlan"
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 h-24 resize-none focus:ring-1 focus:ring-[#22324A] outline-none"
                        />
                    </div>

                    {/* How many people */}
                    <div>
                        <label className="block font-medium mb-2">
                            How many people will visit Kazakhstan with you?
                        </label>
                        <div className="flex flex-wrap gap-3">
                            {[1, 2, 3, 4, "5+"].map((num) => (
                                <button
                                    type="button"
                                    key={num}
                                    onClick={() => setForm({...form, peopleCount: num})}
                                    className={`px-4 py-2 border rounded-xl transition ${
                                        form.peopleCount === num
                                            ? "bg-[#22324A] text-white"
                                            : "hover:bg-gray-300"
                                    }`}
                                >
                                    {num}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Interests */}
                    <div>
                        <label className="block font-medium mb-2">
                            What interests you the most during your trip?
                        </label>
                        <div className="flex flex-col gap-2">
                            {interests.map((item) => (
                                <div key={item}>
                                    <button
                                        type="button"
                                        onClick={() => setForm({...form, tripInterests: item})}
                                        className={`w-full text-left px-4 py-2 border rounded-xl transition ${
                                            form.tripInterests === item
                                                ? "bg-[#22324A] text-white"
                                                : "hover:bg-gray-300"
                                        }`}
                                    >
                                        {item}
                                    </button>
                                    {form.tripInterests === "Other" && item === "Other" && (
                                        <input
                                            name="otherInterest"
                                            placeholder="Please specify"
                                            onChange={handleChange}
                                            className="input mt-2 border border-gray-300 rounded-xl px-4 py-2 w-full focus:ring-1 focus:ring-[#22324A] outline-none"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block font-medium mb-2">
                            Do you have any special requests or requirements?
                        </label>
                        <textarea
                            name="request"
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 h-24 resize-none focus:ring-1 focus:ring-[#22324A] outline-none"
                        />
                    </div>

                    {/* Dietary */}
                    <div>
                        <label className="block font-medium mb-2">
                            Special dietary preferences / requirements
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                            {dietaryOptions.map((option) => (
                                <button
                                    type="button"
                                    key={option}
                                    onClick={() =>
                                        setForm({...form, dietaryPreferences: option})
                                    }
                                    className={`px-4 py-2 border rounded-xl transition ${
                                        form.dietaryPreferences === option
                                            ? "bg-[#22324A] text-white"
                                            : "hover:bg-gray-100"
                                    }`}
                                >
                                    {option}
                                </button>
                            ))}
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
                </div>

                {/* Правая часть — Booking Terms */}
                <div className="flex-1 bg-white rounded-2xl shadow-md p-6 h-fit">
                    <h2 className="text-xl font-semibold mb-4">Booking Terms</h2>
                    <p className="text-sm leading-relaxed">
                        <strong>To confirm your reservation,</strong> a 30% deposit of the
                        total tour cost is required. The remaining balance is payable at the
                        start of the tour.
                    </p>

                    <h3 className="mt-4 font-semibold text-lg">Cancellation Policy</h3>
                    <p className="text-sm leading-relaxed mt-2">
                        Changes or cancellations must be made no later than 72 hours before
                        the tour start time. In this case, a 90% refund of the total cost
                        will be provided. Cancellations made less than 72 hours before the
                        tour start are non-refundable.
                    </p>

                    <p className="text-sm leading-relaxed mt-3">
                        Tours require a minimum number of participants and suitable weather
                        conditions. If these requirements are not met, the tour will be
                        canceled at least 48 hours before the start. Customers will be
                        offered an alternative date/tour or a full refund.
                    </p>

                    <p className="text-sm leading-relaxed mt-3">
                        In the event of <strong>force majeure</strong>, the tour may be
                        canceled, and customers will receive a full refund.
                    </p>
                </div>
            </div>
        </form>
    );
}
