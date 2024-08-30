import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button({ label, variant, icon, color, size }) {
  const classNameVariant = `button ${variant} color-${color} size-${size}`;
  return (
    <button className={classNameVariant}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {label}
    </button>
  );
}

export default Button;
