-- Create table portfolio_project
create table portfolio_project (
  id bigint primary key generated always as identity,
  github_link text not null,
  technologies text not null,
  title text not null,
  allimage text not null,
  description text not null,
  more_information text,
  website text not null
);

-- Insert sample data into the table
insert into portfolio_project (github_link, technologies, title, allimage, description, more_information, website)
values (
  'https://github.com/example',
  'Astro, Supabase',
  'Sample Project',
  'sample.jpg',
  'Sample description',
  'More sample information',
  'https://example.com'
);

alter table portfolio_project enable row level security;
