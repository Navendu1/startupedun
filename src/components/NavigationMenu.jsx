import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./NavigationMenu.css";
import Logo from "./Logo";

const NavigationMenuDemo = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <Link to="/" className="flex items-center mr-4">
            <Logo />
          </Link>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Learn <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <li style={{ gridRow: "span 3" }}>
                <NavigationMenu.Link asChild>
                  <Link className="Callout" to="/learning-modules">
                    <svg
                      aria-hidden
                      width="38"
                      height="38"
                      viewBox="0 0 25 25"
                      fill="white"
                    >
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className="CalloutHeading">StartupEdu</div>
                    <p className="CalloutText">
                      Empowering entrepreneurs through education.
                    </p>
                  </Link>
                </NavigationMenu.Link>
              </li>
              <ListItem to="/learning-modules/text-learning" title="Text Learning">
                Text-based learning resources and materials.
              </ListItem>
              <ListItem to="/learning-modules/video-learning" title="Video Learning">
                Video tutorials and educational content.
              </ListItem>
              <ListItem to="/learning-modules/startup-basics" title="Startup Basics">
                Introduction to startups, types, and case studies.
              </ListItem>
              <ListItem to="/learning-modules/idea-generation" title="Idea Generation">
                Ideation techniques and validation frameworks.
              </ListItem>
              <ListItem to="/learning-modules/market-research" title="Market Research">
                Primary/secondary research and competitive analysis.
              </ListItem>
              <ListItem to="/learning-modules/business-model" title="Business Model">
                Business Model Canvas and revenue models.
              </ListItem>
              <ListItem to="/learning-modules/pitch-deck" title="Pitch Deck">
                Creating effective pitch decks and presentations.
              </ListItem>
              <ListItem to="/learning-modules/financial-modeling" title="Financial Modeling">
                Budgeting, forecasting, and financial planning.
              </ListItem>
              <ListItem to="/learning-modules/fundraising" title="Fundraising">
                Funding types, pitching tips, and networking.
              </ListItem>

              <li>
                <h3 className="px-3 py-2 text-sm font-semibold">Chapters</h3>
                <div className="space-y-2">
                  <ListItem to="/learning-modules/chapters/introduction-to-startups" title="Introduction to Startups">
                    Get started with startup fundamentals.
                  </ListItem>
                  <ListItem to="/learning-modules/chapters/finding-your-business-idea" title="Finding Your Business Idea">
                    Discover and validate business ideas.
                  </ListItem>
                  <ListItem to="/learning-modules/chapters/market-research-fundamentals" title="Market Research">
                    Learn market research essentials.
                  </ListItem>
                  <ListItem to="/learning-modules/chapters/business-model-development" title="Business Model">
                    Develop your business model.
                  </ListItem>
                  <ListItem to="/learning-modules/chapters/financial-planning" title="Financial Planning">
                    Master startup financial planning.
                  </ListItem>
                  <ListItem to="/learning-modules/chapters/legal-basics" title="Legal Basics">
                    Understand legal requirements.
                  </ListItem>
                  <ListItem to="/learning-modules/chapters/building-your-team" title="Building Your Team">
                    Learn team building strategies.
                  </ListItem>
                  <ListItem to="/learning-modules/chapters/marketing-fundamentals" title="Marketing">
                    Master marketing essentials.
                  </ListItem>
                  <ListItem to="/learning-modules/chapters/fundraising-essentials" title="Fundraising">
                    Learn about startup funding.
                  </ListItem>
                  <ListItem to="/learning-modules/chapters/growth-and-scaling" title="Growth & Scaling">
                    Strategies for startup growth.
                  </ListItem>
                </div>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            About <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List two">
              <ListItem title="Success Stories" to="/success-stories">
                Read inspiring startup success stories.
              </ListItem>
              <ListItem title="Our Mission" to="/about/mission">
                Learn about our vision and goals.
              </ListItem>
              <ListItem title="Team" to="/about/team">
                Meet the people behind StartupEdu.
              </ListItem>
              <ListItem title="Partners" to="/about/partners">
                Our network of supporters and collaborators.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <Link
            className="NavigationMenuLink"
            to="/contact"
          >
            Contact
          </Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = ({ className, children, title, ...props }) => {
  return (
    <li>
      <NavigationMenu.Link asChild>
        <Link
          className={classNames("ListItemLink", className)}
          to={props.to}
        >
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{children}</p>
        </Link>
      </NavigationMenu.Link>
    </li>
  );
};

ListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavigationMenuDemo;
