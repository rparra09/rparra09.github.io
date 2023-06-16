---
layout: post
title:  "Visualizing Data with Tableau - Education Loan Debt"
date:   22022-09-06T09:38:22+00:00
image:  Edu_loan_Tableau_Dash.jpg
tags:   Resources
---
<h1>I. Data Exploration</h1>

<p>As a response to the long-term economic effects of the COVID-19 pandemic, the U.S. government announced its first ever, wide-ranging student debt relief plan.
Following the first-of-its-kind announcement, an overwhelming number of conflicting narratives emerged.</p>

<p>Therefore, I decided to visualize higher education debt data to interpret it for myself and attempt to uncover who is affected by this debt relief? How many people qualify? How many people will have all federal loan debt relieved?</p>

<p>In this independent project, I use Tableau to visualize education debt and share my findings here.</p>

<h1>II. Data Processing</h1>

<p><b>Step 1 - Obtain Data: </b></p>

<p>First, I downloaded data from:</p>
<ul>
  <li><a href="https://studentaid.gov/data-center/student/portfolio">U.S. Dept. of Education </a></li>
  <li><a href="https://nces.ed.gov/programs/digest/current_tables.asp">National Center for Education Statistics</a></li>
  <li><a href="https://educationdata.org/student-loan-debt-by-income-level">Education Data Initiative</a></li>
</ul>

<p><b>Step 2 - Data Integration: </b></p>
<p>While I will use available student loan data from 1982 to the present to showcase the increasing debt size over time, most data values will be from 2019, the last reported Student Loan data before the payment pause of April 2020.
I saved the spreadsheets locally and leveraged Tableau’s Data Interpreter tool to link the correct data to their corresponding column name.
Once the connection to the spreadsheets are made, I use Tableau logical table schema to reference most tables by their corresponding “Year” columns.</p>

<p><img src="/images/Tableau_connections.jpg" alt="" />
<em>Tableau Connections</em></p>

<p>There are custom measures I wished to calculate, I use Tableau’s Calculated Field to create Total Debt under $20K and Median Income for Non-College degree holders</p>

<p><img src="/images/Calculated_Field.jpg" alt="" />
<em>Tableau Measures</em></p>

<p></p>
<h1>III. Visualization in Tableau</h1>
<p><b>Step 3 - Data Visualization: </b></p>

<p><h3><a href="https://public.tableau.com/app/profile/richelle.parra/viz/Edu_Dash_1/Dash1LoanBreakdown?:language=en-US&amp;:display_count=n&amp;:origin=viz_share_link">Dashboard 1 – Student Loan Breakdown</a></h3></p>
<ul>
  <li>Loan Borrowers By Age Distribution</li>
  <li>Loan Borrowers By Age (% of Total)</li>
  <li>Median Net Worth and Loan Debt of All Families</li>
  <li>Debt Size Over Time</li>
  <li>Debt Size Under $20K</li>
</ul>

<p><img src="/images/Debt_Dashboard1.jpg" alt="" />
<em>Dashboard 1 – Student Loan Breakdown</em></p>

<p><a href="https://public.tableau.com/app/profile/richelle.parra/viz/Edu_Dash_1/Dash1LoanBreakdown?:language=en-US&amp;:display_count=n&amp;:origin=viz_share_link">Click here for the interactive Tableau Dashboard</a></p>

<p><h3><a href="https://public.tableau.com/views/Edu_Dash_1/Dash2IncomevsDebt?:language=en-US&amp;:display_count=n&amp;:origin=viz_share_link">Dashboard 2 – Loan Borrower Income and Debt Size</a></h3></p>
<ul>
  <li>Median Income by Educational Attainment</li>
  <li>Total Debt By Amount and # of Borrowers</li>
  <li>Average Student Loan Debt  By State</li>
  <li>Median Annual Income By State</li>
  <li>Average Student Debt By Median Income Scatterplot</li>
</ul>

<p><img src="/images/Debt_Dashboard2.jpg" alt="" />
<em>Dashboard 2 – Loan Borrower Income and Debt Size</em></p>

<p><a href="https://public.tableau.com/views/Edu_Dash_1/Dash2IncomevsDebt?:language=en-US&amp;:display_count=n&amp;:origin=viz_share_link">Click here for the interactive Tableau Dashboard</a></p>

<h1>IV. Summary Findings</h1>

<p><b>Federal student loan debt breakdown</b></p>
<ul>
  <li>Total federal student loan borrowers (2019): <b>45.4 million.</b></li>
  <li>Total outstanding federal student loan debt (2019): <b>$1.6 trillion.</b></li>
  <li>65% of education debt is held by 25 to 49-year-olds (31 million people) and 7.2 million people aged less than 24 owe 16% of student debt.</li>
  <li>About half or 24 million loan borrowers have $20K or less in education debt</li>
  <li>Education Installment debt has increased steadily regardless of economic landscape. Meanwhile, U.S. Families’ net worth dropped during the 2008 financial crisis and has not recovered to same level since.</li>
</ul>

<p><b>Loan Borrower Income and Debt Size</b></p>
<p>Median income (self-reported):</p>
<ul>
  <li>without a college degree is $46K</li>
  <li>with a college degree is $75K</li>
  <li>Bachelor’s: $66K</li>
  <li>Master’s: $82K</li>
  <li>Doctorate: $113K</li>
  <li>Some college but no degree is $48K</li>
</ul>

<p><b>Loan Borrowers Average Debt and Median Income^</b></p>

<p>Highest average debt:</p>
<ul>
  <li>Washington DC: $55K - Maryland: $43K - Georgia: $42K</li>
</ul>

<p>Lowest average debt:</p>
<ul>
  <li>North Dakota: $29K - Wyoming: $30K - Iowa: $31K</li>
</ul>

<p>Highest Median income:</p>
<ul>
  <li>Washington, DC: $92K - Maryland: $87K - Massachusetts: $86K</li>
</ul>

<p>Lowest median income:</p>
<ul>
  <li>Mississippi: $46K - West Virginia: $49K - Arkansas: $49K</li>
</ul>
<p>^Education Data Initiative, non-government source, calculated median income by average student debt</p>
<p>
</p>
<h1>Conclusions from Tableau Visualizations</h1>

<h4>Who is affected by this debt relief?</h4>
<p>45.4 million federal loan borrowers with outstanding debt.<p>

  <h4>How many people qualify?</h4>
<p>If we apply the current official estimate of 60%, then 27.3 million borrowers will receive up to $20K in debt relief.<p>

  <h4>How many people will have all federal loan debt relieved?</h4>
<p>Half of loan borrowers have $20K or less in outstanding debt. However, exact number is unknown given Income and Pell grant requirements. If we apply the current official estimate of 60%, then 14.4 million borrowers qualify to have up to $10K in debt relief if they did not receive a Pell grant and up to $20K if they did.</p>

<p>The most challenging information to obtain was income data for education loan borrowers. <i>Avg Student Debt data vs Median Income</i> does not indicate how many of those people have incomes below $125K (single filing) or under $250K (joint filing) nor which percentage of them ever received Pell grants. The Biden administration claims 60% of total borrowers will qualify for up to $20K in debt relief. It is safe to conclude that until the Dept. of Education releases official debt relief data, how many people will receive debt relief are informed estimations.</p>

<p>In my view, the <i>Average Student Debt By Median Income Scatterplot</i> is the most telling visualization. While median income ranges from $33K to $86K by state, the student debt range is much narrower $29K to $43K. This means the impact of up to $20K debt relief will be more meaningful to borrower's discretionary income in lower median income states.</p>
</p></p></p></p>
