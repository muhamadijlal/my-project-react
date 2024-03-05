const JobExperiences = ({ role, company, since }) => {
  return (
    <div className="border-b-2">
      <h4 className="text-xl font-bold capitalize">{role}</h4>
      <p className="my-2 font-light text-secondary">{company}</p>

      <p className="mb-5 mt-6 text-xs font-light uppercase text-secondary">
        {since}
      </p>
    </div>
  );
};

export default JobExperiences;
