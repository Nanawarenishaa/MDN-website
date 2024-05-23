/* eslint-disable react/prop-types */




const Button = ({text , bg}) => {
  return (
<button className="bg-slate-100 text-slate-900 rounded-md py-2 px-6 text-xl hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 hover:text-white ">
{text}
</button>
  )
}

export default Button
