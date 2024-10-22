'use client';
import { useRouter, useParams } from "next/navigation";
export function Delete() {
    const router = useRouter();

    const params = useParams();
    const id = params.id;


    const deleteLocation = (id) => {

        const Confirm_meesage = window.confirm("정말로 삭제하시겠습니까?");
        if (Confirm_meesage) {
            const options = {
                method: "DELETE"
            };
            fetch(process.env.NEXT_PUBLIC_DB_API_URL + `locations/${id}`, options)
                .then(response => response.json())
                .then(result => {
                    router.refresh();
                    router.push("/trip");
                }).catch(error => console.error("Error deleting location:", error));
        }


    }
    return (
        <button onClick={() => deleteLocation(id)}>삭제</button>
    )

}