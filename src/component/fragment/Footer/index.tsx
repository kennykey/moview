

export default function Footer() {
    return(
        <footer>
            <p className="block text-md text-gray-500 fixed bottom-0 right-0">
                copyright &copy; {new Date().getFullYear()} <span className="font-bold">Kenny key</span> alright reserved
            </p>
        </footer>
    )
}