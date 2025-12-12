import toast from "react-hot-toast";

export function parseApiError(error) {
    if (!error) return "Неизвестная ошибка";

    if (error.message === "Network Error") {
        return "Проблемы с подключением. Проверьте интернет.";
    }

    const data = error.response?.data;

    if (!data) return "Ошибка сервера";

    if (typeof data.error === "string") {
        const message = data.error;

        const fieldMatch = message.match(/'RegisterInput\.(\w+)'/);
        const field = fieldMatch ? fieldMatch[1] : null;

        const tagMatch = message.match(/'(\w+)' tag/);
        const tag = tagMatch ? tagMatch[1] : null;

        if (field && tag === "min") {
            return `${field}: слишком короткий пароль (минимальная длина 6 символов)`;
        }

        if (field && tag === "required") {
            return `${field}: обязательное поле`;
        }

        return message;
    }
    if (Array.isArray(data)) {
        return data
            .map((e) => {
                if (e.field && e.tag === "required") return `${e.field} обязательно`;
                if (e.field && e.tag === "min") return `${e.field}: минимальная длина ${e.param}`;
                return e.error || "Ошибка данных";
            })
            .join("\n");
    }

    if (data.message) return data.message;

    return "Неизвестная ошибка";
}

export function handleApiError(error) {
    const message = parseApiError(error);
    toast.error(message);
}
