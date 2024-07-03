import HomeLayout from "@/component/layout/HomeLayout";
import Button from "@/component/ui/Button";
import Input from "@/component/ui/Input";
import Select from "@/component/ui/Select";


export default function Form() {
    return (
        <HomeLayout>
            <form className="bg-white p-6 rounded shadow-md w-full max-w-sm mx-auto my-10">
                <h2 className="text-2xl font-bold mb-4 text-center">Simple Form</h2>
                <Input name="title" type="text" id="title" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your Title"/>
                <Input name="original_title" type="text" id="original_title" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your Original_title"/>
                <Input name="vote_count" type="number" id="vote_count" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your vote_count"/>
                <Input name="vote_average" type="number" id="vote_average" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your Vote_average"/>
                <Input name="vote_popularity" type="number" id="popularity" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your Popularity"/>
                <Select
                    label="original_language"
                    name="original_language"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    options={[
                        { label: 'english', value: 'english' },
                        { label: 'indonesia', value: 'indonesia' },
                    ]}
                />
                <Select
                    label="adult"
                    name="adult"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    options={[
                        { label: 'false', value: 'false' },
                        { label: 'true', value: 'true' },
                    ]}
                />
                <Select
                    label="video"
                    name="video"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    options={[
                        { label: 'false', value: 'false' },
                        { label: 'true', value: 'true' },
                    ]}
                />
                
                <div className="flex items-center justify-between">
                    <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                        Submit
                    </Button>
                </div>
            </form>
        </HomeLayout>
    )
}