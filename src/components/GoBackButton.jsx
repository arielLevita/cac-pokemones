import { useNavigate } from "react-router-dom";

const GoBackButton = () => {

    // Permite acceder al historial de navegación del usuario.
    const navigate = useNavigate();

    // Retrocede una línea en el historial del usuario.
    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <button
            onClick={handleGoBack}
            className="btn border border-dark my-3"
        >
            Go Back
        </button>
    );
};

export default GoBackButton;