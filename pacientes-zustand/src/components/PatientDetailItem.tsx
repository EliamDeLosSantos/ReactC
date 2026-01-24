type PatientDetailItemProps = {
    label: string
    data: string
}
export default function PatientDetailItem({label, data}: PatientDetailItemProps) {
  return (
    <p className="uppercase font-bold text-gray-700 mb-3"> {label} : {''}
        <span className="font-normal normal-case">{data}</span>
    </p>
  )
};

