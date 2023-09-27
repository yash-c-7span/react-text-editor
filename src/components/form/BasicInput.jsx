const BasicInput = ({
  id,
  label,
  name,
  onChange,
  onBlur,
  errorMsg,
  type,
  placeholder,
  touched,
  highlight,
  theme,
  disabled,
  ...restProps
}) => {
  return (
    <>
      {label && (
        <label
          htmlFor={name}
          className="mb-1 block text-base font-medium text-primary-900"
        >
          {label}
          <span className="font-bold"> {highlight}</span>
        </label>
      )}
      <div
        className={`relative w-full ${theme == "secondary" ? "" : ""}`}
      >
        <input
          id={id}
          type={type}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          onBlur={onBlur}
          disabled={disabled}  
          className="bg-white p-2 w-full border border- rounded-lg shadow-md outline-none"
          {...restProps}
        />
      </div>
      {errorMsg && touched ? (
        <span className="error mt-1 text-xs text-danger-500">
          {errorMsg}
        </span>
      ) : null}
    </>
  );
};

BasicInput.defaultProps = {
  disabled: false,
  label: "",
  highlight: "",
  id: undefined,
};

export default BasicInput;