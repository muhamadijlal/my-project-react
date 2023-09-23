const Footer = ({ items }) => {
  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;

  const percentage = Math.round((checkedItems / totalItems) * 100);

  const label = totalItems
    ? `Ada ${totalItems} barang di daftar belanjaan, ${checkedItems} barang sudah dibeli ${percentage}%`
    : "Daftar belanja masih kosong!";

  return <footer className="stats">{label}</footer>;
};
export default Footer;
