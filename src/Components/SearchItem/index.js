import './index.css'

const SearchItem = props => {
  const {initialHistoryLists, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = initialHistoryLists
  const deleteItem = () => {
    onDelete(id)
  }
  return (
    <div className="main-list-cont">
      <li className="list-items">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="img" alt="domain logo" key={domainUrl} />
        <p className="icon-title">{title}</p>
        <p className="url">{domainUrl}</p>
      </li>
      <div className="de-cont">
        <button type="button" onClick={deleteItem} className="logo-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete"
            className="del-logo"
          />
        </button>
      </div>
    </div>
  )
}

export default SearchItem
