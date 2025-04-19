import { useForm } from 'react-hook-form'

type NoteData = {
  note: string;
}
const AddInfo = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<NoteData>();
  
    const onSubmit = (data: NoteData) => {
      console.log(data);
    };
  return (
   <>
   <section className="h-[175px] mt-[32px]">
    <h1 className="font-medium text-2xl">Additional Info</h1>
    <div className="h-[129px] mt-[20px]">
      <h1 className="font-normal text-sm">Order Notes (Optional)</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input
                  {...register('note', { required: "name is required" })}
                  className='mt-[8px] p-3 w-full h-[100px] border rounded-md border-gray-300 '
                  type="text" placeholder='Notes about your order, e.g. special notes for delivery' id='note' />
      {errors.note && ( <p className='text-red-500 text-sm'>{errors.note.message}</p>)}
      </form>

      
    </div>
   </section>
   </>
  )
}

export default AddInfo