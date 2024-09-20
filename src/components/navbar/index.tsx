import Image from 'next/image';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';

export default function Navbar() {
    return (
        <>
            <div className="bg-base-100">
                <div className="container py-4 flex items-center justify-between">
                    <div>
                        <Image
                            src={'/assets/brand/lockbox.svg'}
                            width={400}
                            height={100}
                            className="h-[36px] w-auto"
                            alt="Lockbox"
                        />
                    </div>
                    <div className="flex justify-end gap-6 items-center">
                        <button className="btn btn-rg btn-secondary">
                            <AiOutlinePlus /> Add New
                        </button>
                        <label className="input input-bordered rounded-sm flex items-center gap-2 bg-secaondary">
                            <AiOutlineSearch />
                            <input type="text" className="grow" placeholder="Search" />
                        </label>
                        <Image
                            src={'/assets/brand/favicon.svg'}
                            className="w-[24px]"
                            alt="User Profile"
                            width={46}
                            height={46}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
