import {Link} from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

interface Component {
  title: string;
  href: string;
  description: string;
}

const components: Component[] = [
  {
    title: "Restaurants",
    href: "/restaurants",
    description: "Get all information about resturants.",
  },
  {
    title: "Leads",
    href: "/leads",
    description: "Get all information about leads.",
  },
  {
    title: "Call Schedules",
    href: "/call-schedules",
    description: "Get all information about call schedules.",
  },
  {
    title: "Orders",
    href: "/orders",
    description: "Details of all orders.",
  },
  {
    title: "Interactions",
    href: "/interactions",
    description: "History of all interactions.",
  },
];

export function NavigationMenuComponent() {
  return (
      <div className="">
        <NavigationMenu>
          <NavigationMenuList>
              {components.map((component) => (
                  <NavigationMenuItem key={component.title}>
                    <Link
                        to={component.href}
                        className="p-3">
                      {component.title}
                    </Link>
                  </NavigationMenuItem>
              ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
  );
}
