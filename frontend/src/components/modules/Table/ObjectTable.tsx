const ObjectTable = () => {
  return (
    <table className='[ object-table ]'>
        <thead>
            <td>Name</td>
            <td>Value</td>
            <td>Pct</td>
        </thead>
        <tr>
            <td>Display Name</td>
            <td>M16 Assault Rifle</td>
            <td data-percent='-1'>0%</td>
        </tr>
        <tr>
            <td>Max Damage</td>
            <td>32</td>
            <td data-percent='1'>900%</td>
        </tr>
    </table>
  )
}

export default ObjectTable;