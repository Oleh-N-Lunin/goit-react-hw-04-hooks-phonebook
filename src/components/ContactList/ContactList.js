import PropTypes from 'prop-types';

import styles from "../FormStyles/FormStyles.module.css";

function –°ontactList({ contactList, onDeleted }) {
  return (
    <ul className={'js-list'}>
      {contactList.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <span>{name}:</span>
            <span>
              <a href={`tel: ${number}`}>{ number}</a>
            </span>
            <button
              className={styles.btnList}
              type="button"
              onClick={() => onDeleted(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

–°ontactList.propTypes = {
    contactList: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        }),
    ),

    onDeleted: PropTypes.func.isRequired,
}

export default –°ontactList;