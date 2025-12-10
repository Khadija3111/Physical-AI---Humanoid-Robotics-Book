# ROS 2: Describing Your Robot with URDF

To interact with and simulate a robot, the software system needs a precise description of its physical characteristics. This is where the Universal Robot Description Format (URDF) comes into play. URDF is an XML format used in ROS 2 to describe all aspects of a robot, including its kinematic and dynamic properties, visual appearance, and collision geometry.

## The Importance of URDF

URDF serves as a single, standardized file for representing a robot, providing a common language for various ROS 2 tools and packages. Its importance is multifaceted:

*   **Kinematics**: Defines the robot's joints and links, allowing for forward and inverse kinematics calculations essential for motion planning and control.
*   **Visualization**: Specifies the visual properties of each link (e.g., shape, color, texture), enabling realistic rendering in simulation environments like RViz and Gazebo.
*   **Collision Detection**: Describes simplified collision geometries for each link, which are crucial for detecting obstacles and preventing self-collisions in motion planning.
*   **Simulation**: Provides information for physics engines in simulators to accurately model the robot's behavior under gravity and other forces.

## Core URDF Elements

A URDF file is structured around two primary elements: **links** and **joints**.

### Links

A `<link>` element describes a rigid body part of the robot. Each link has several properties:

*   **Visual**: Defines the graphical representation of the link. This can include a simple geometric shape (box, cylinder, sphere) or a mesh file (e.g., `.dae` or `.stl`).
*   **Collision**: Defines a simplified geometric shape used for collision detection. This is often a simpler approximation of the visual geometry to reduce computational overhead.
*   **Inertial**: Defines the mass, center of mass (COM), and inertia matrix of the link. These properties are essential for accurate physics simulation.

**Example Link Structure:**

```xml
<link name="base_link">
  <visual>
    <geometry>
      <box size="0.1 0.1 0.1" />
    </geometry>
    <material name="blue">
      <color rgba="0 0 0.8 1" />
    </material>
  </visual>
  <collision>
    <geometry>
      <box size="0.1 0.1 0.1" />
    </geometry>
  </collision>
  <inertial>
    <mass value="1.0" />
    <origin xyz="0 0 0.05" rpy="0 0 0" />
    <inertia ixx="0.01" ixy="0" ixz="0" iyy="0.01" iyz="0" izz="0.01" />
  </inertial>
</link>
```

### Joints

A `<joint>` element describes the connection between two links, defining their relative motion. Each joint has the following key attributes:

*   **Name**: A unique identifier for the joint.
*   **Type**: Specifies the type of motion allowed (e.g., `revolute`, `continuous`, `prismatic`, `fixed`, `floating`, `planar`).
*   **Parent/Child Links**: Defines which two links the joint connects. The `parent` link is the fixed side, and the `child` link moves relative to it.
*   **Origin**: Specifies the transformation (position and orientation) of the child link relative to the parent link.
*   **Axis**: For revolute and prismatic joints, defines the axis of rotation or translation.
*   **Limit**: For revolute and prismatic joints, specifies the upper and lower bounds of the joint's movement.

**Example Joint Structure:**

```xml
<joint name="base_to_arm_joint" type="revolute">
  <parent link="base_link" />
  <child link="arm_link" />
  <origin xyz="0 0 0.1" rpy="0 0 0" />
  <axis xyz="0 0 1" />
  <limit lower="-1.57" upper="1.57" effort="100" velocity="100" />
</joint>
```

## Xacro: Extending URDF

While URDF is powerful, it can become verbose and repetitive for complex robots. To address this, ROS 2 often uses Xacro (XML Macros), which allows for:

*   **Macros**: Define reusable blocks of URDF code.
*   **Variables**: Parameterize robot properties (e.g., link dimensions, joint limits).
*   **Conditional Statements**: Include or exclude parts of the robot description based on conditions.

Xacro files (`.urdf.xacro`) are processed into standard `.urdf` files before being loaded into ROS 2.

## Next Steps

In the upcoming simulation module, we will utilize URDF files to bring our robot descriptions to life in virtual environments like Gazebo. Understanding how to construct a basic URDF is a critical step towards simulating and controlling your own physical AI agents. You will learn how to create a basic URDF file for a given physical robot description, enabling you to launch a simulation with basic sensor outputs.