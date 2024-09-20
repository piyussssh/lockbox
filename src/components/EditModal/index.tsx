import Image from 'next/image';
import { MdContentCopy, MdVisibility } from 'react-icons/md';

export default function EditModal() {
    return (
        <>
            <dialog id="edit_modal" className="modal">
                <div className="modal-box flex flex-col gap-6">
                    <div className="flex gap-3 items-center w-full">
                        <Image src={'/assets/brand/favicon.svg'} width={22} height={22} alt="LockBox" />
                        <p className="text-xl">Nexustiq</p>
                    </div>
                    <label className="input input-bordered rounded-sm flex items-center gap-2 bg-secaondary">
                        <input type="text" className="grow" placeholder="Name" />
                        <button className="btn btn-ghost btn-icon" onClick={() => console.log('Hello')}>
                            <MdContentCopy />
                        </button>
                    </label>
                    <label className="input input-bordered rounded-sm flex items-center gap-2 bg-secaondary">
                        <input type="text" className="grow" placeholder="Username/Email" />
                        <button className="btn btn-ghost btn-icon" onClick={() => console.log('Hello')}>
                            <MdContentCopy />
                        </button>
                    </label>
                    <label className="input input-bordered rounded-sm flex items-center gap-2 bg-secaondary">
                        <input type="text" className="grow" placeholder="Password" />
                        <button className="btn btn-ghost btn-icon" onClick={() => console.log('Hello')}>
                            <MdVisibility />
                        </button>
                        <button className="btn btn-ghost btn-icon" onClick={() => console.log('Hello')}>
                            <MdContentCopy />
                        </button>
                    </label>
                    <div className="modal-action">
                        <form method="dialog" className="flex gap-4">
                            <button className="btn btn-rg btn-primary">Close</button>
                            <button className="btn btn-rg btn-secondary">Update</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
}
