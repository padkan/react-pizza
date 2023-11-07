import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full disabled:cursor-not-allowed hover:bg-yellow-300 text-stone-800 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2";

  const styles = {
    primary: base + " px-4 py-3 md:py-4 md:px-6",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-xs",
    secondary: "inline-block text-sm font-semibold tracking-wide uppercase transition-colors duration-300 border-2 border-stone-300 rounded-full disabled:cursor-not-allowed hover:bg-stone-300 focus:text-stone-800 text-stone-400 focus:outline-none focus:ring focus:bg-stone-300  focus:ring-stone-200 focus:ring-offset-2  px-4 py-2.5 md:py-3.5 md:px-6",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
    if(onClick) {
      return (<button disabled={disabled} className={styles[type]} onClick={onClick} >
          {children}
          </button>
      );
    }

  return (
    <button disabled={disabled} className={styles[type]} >
      {children}
    </button>
  );
}

export default Button;
