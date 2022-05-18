import React from 'react';
import { useForm } from 'react-hook-form';

const InputForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data);
    return (
        <div className="form-control mb-10">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="input-group justify-center"
            >
                <input
                    {...register('name')}
                    type="text"
                    placeholder="Task Name"
                    className="input input-bordered w-1/4 bg-accent input-sm text-black focus:bg-white placeholder:text-gray-500"
                    required
                />
                <input
                    {...register('description')}
                    type="text"
                    placeholder="Description"
                    className="input input-bordered bg-accent w-3/4 input-sm text-black focus:bg-white placeholder:text-gray-500"
                    required
                />
                <button className="btn btn-primary shadow-lg btn-sm ">
                    Add Todo
                </button>
            </form>
        </div>
    );
};

export default InputForm;
