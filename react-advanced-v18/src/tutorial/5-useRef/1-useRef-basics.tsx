import { FormEvent, useEffect, useRef } from 'react'

function UseRefBasics() {
  const refContainer = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!refContainer.current) return;

    console.log(refContainer.current.value);
  };

  useEffect(() => {
    console.log(refContainer.current);
    if(!refContainer.current) return;
    
    refContainer.current.focus();
  });


  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input className="ref-input" type="text" ref={refContainer} />
        </div>
        <button type='submit'>submit</button>
      </form>
    </>
  )
}

export default UseRefBasics