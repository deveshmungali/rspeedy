"use client";

import Projects from './overview/projects';

const PermissionPageView = ({ trans }) => {
  return (
    <div className="space-y-6">
      <div>
        <Projects />
      </div>
    </div>
  );
};

export default PermissionPageView;
