import './Header.css'

export default function Header() {
  return (
    <div className="authorizarionHeaderWrapper">
        <h2>MY.GOV.GE</h2>
        <aside className='authHeaderRightSide'>
            <select name="languageSelect" className='languageSelect'>
                <option value="geo">ქართული</option>
                <option value="eng">English</option>
            </select>
            <h3 className='authHeaderHelp'>დახმარება</h3>
        </aside>
    </div>
  )
}
