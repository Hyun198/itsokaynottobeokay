'use client'
import { useRouter } from "next/navigation";
import './createPage.style.css';
export default function CreateLocation() {
    const router = useRouter();
    return (
        <>

            <div className="location-create">
                <h2>글 작성하기</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const location_name = e.target.location_name.value;
                    const location_address = e.target.location_address.value;
                    const description = e.target.description.value;
                    const location_img = e.target.location_img.value;
                    const options = {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            location_name,
                            location_address,
                            description,
                            location_img
                        })
                    }
                    fetch(process.env.NEXT_PUBLIC_DB_API_URL + 'locations', options)
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            router.refresh();
                            router.push(`/trip`);
                        })
                }}>
                    <input type="text" name="location_name" placeholder="location"></input>
                    <input type="text" name="location_address" placeholder="address"></input>
                    <textarea name="description" placeholder="description"></textarea>
                    <input type="text" name="location_img" placeholder="Image_url"></input>
                    <button type="submit">작성</button>
                </form>
            </div>
        </>

    )

}