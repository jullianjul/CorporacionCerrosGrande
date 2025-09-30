import { useNavigate } from "react-router-dom";
//la función se debe usar así: const changeUrl = useChangeUrl(); // Obtener la función de navegación
export function useChangeUrl() {
    const navigate = useNavigate();
    return (url) => navigate(url);
}