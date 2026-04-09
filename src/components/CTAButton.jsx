

export function CTAButton(props) {
    const {children} = props
  return (
    <button className="px-8 py-3 rounded-xl bg-white text-black hover:bg-slate-200">{children}</button>
  )
}
