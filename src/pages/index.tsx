import HomeLayout from "@/component/layout/HomeLayout";
import Image from "next/image";

export default function Home() {
  return (
      <HomeLayout>
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 my-5">
            <div className="shrink-0">
                <Image className="h-12 w-12" src="/profile.jpg" alt="ChitChat Logo" width={100} height={100} />
            </div>
          <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
              <p className="text-slate-500">You have a new message!</p> 
          </div>
        </div>
      </HomeLayout>
  );
}
