export default function Breadcrumbs({ section, sub }) {
  return (
    <div className="text-gray-600 text-sm font-medium">
      Dashboard / <span className="text-gray-800">{section}</span> 
      {sub && sub !== section && ` / ${sub}`}
    </div>
  );
}
