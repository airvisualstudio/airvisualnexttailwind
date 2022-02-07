export default function Cards(){
    return (
        <>
        {/*  Will look like a card, but with square corners */}
        <div className="inline-block">
          <svg className=" inline-block w-6 h-6 mr-2 stroke-airvisual sm:inline-grid" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>

          <p className='inline-block sm:inline-grid'>
                Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </div>
        </>
    )

}