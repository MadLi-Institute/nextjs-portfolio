import Link from "next/link"

const Button = ({url, text, color}) => {
  return (
    <Link href={url}>
        <button className={`btn btn-${color}`}>{text}</button>
    </Link>
  )
}

export default Button