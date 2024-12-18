import PropTypes from 'prop-types';

const MetricCard = ({ title, value, variant }) => {
  const valueColors = {
    occupied: "text-[#22d3ee]",
    vacant: "text-[#facc15]",
    types: "text-white",
    tenants: "text-white"
  };

  return (
    <div className="bg-[#1C1C1C] rounded-xl p-4 transition-all duration-200 hover:bg-[#242424]">
      <div>
        <p className="text-[#71767C] text-sm mb-1">{title}</p>
        <p className={`${valueColors[variant]} text-2xl font-medium`}>
          {value}
        </p>
      </div>
    </div>
  );
};

MetricCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['occupied', 'vacant', 'types', 'tenants']).isRequired,
};

const MetricsDashboard = () => {
  return (
    <div className="w-full mt-6 space-y-6">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Occupied" value="358" variant="occupied" />
        <MetricCard title="Vacant" value="98" variant="vacant" />
        <MetricCard title="Types" value="14" variant="types" />
        <MetricCard title="Tenants" value="750" variant="tenants" />
      </div>
    </div>
  );
};

export default MetricsDashboard;

