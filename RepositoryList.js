import React, { useState } from 'react';
import './RepositoryList.css';

const repositories = [
  { name: "design-system", type: "Public", language: "React", size: "7320 KB", updated: "1 day ago" },
  { name: "codeant-ci-app", type: "Private", language: "Javascript", size: "5871 KB", updated: "2 days ago" },
  { name: "analytics-dashboard", type: "Private", language: "Python", size: "4521 KB", updated: "5 days ago" },
  { name: "mobile-app", type: "Public", language: "Swift", size: "3096 KB", updated: "3 days ago" },
  { name: "e-commerce-platform", type: "Private", language: "Java", size: "6210 KB", updated: "6 days ago" },
  { name: "blog-website", type: "Public", language: "HTML/CSS", size: "1876 KB", updated: "4 days ago" },
  { name: "social-network", type: "Private", language: "PHP", size: "5432 KB", updated: "7 days ago" },
];

const RepositoryList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRepos = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="repository-list">
      <input
        type="text"
        placeholder="Search Repositories"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <ul>
        {filteredRepos.map((repo, index) => (
          <li key={index} className="repository-item">
            <div className="repo-name">{repo.name}</div>
            <div className="repo-details">
              <span className={`repo-type ${repo.type.toLowerCase()}`}>{repo.type}</span>
              <span>{repo.language}</span>
              <span>{repo.size}</span>
              <span>{repo.updated}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoryList;
