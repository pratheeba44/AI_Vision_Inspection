1. Project Overview

This project is a web-based AI vision inspection prototype designed to identify and measure mechanical components using a smartphone camera.

The system accepts images or camera input, identifies components such as bolts, nuts and washers, performs automatic calibration using a known reference, measures selected geometric features, performs visual inspection, and generates an engineering inspection report.

The overall workflow is:

Camera → Object Detection → Reference Detection → Calibration → Measurement → Inspection → Result → PDF Report

The system is designed to distinguish between values that are directly measured from the image and values that are AI-estimated or matched against a component/standards database.


2. Technology Stack

Frontend

HTML, CSS and JavaScript

The frontend provides the browser-based interface and allows the user to:

* Access the smartphone camera
* Capture images
* Upload images
* Display detected components
* Display measurements and inspection results
* Generate an inspection report

Computer Vision

OpenCV

Classical computer-vision techniques are used for tasks such as:

* Image preprocessing
* Edge detection
* Contour detection
* Shape analysis
* Pixel-distance measurement
* Geometric feature extraction

OpenCV is used where the geometry can be determined directly from image information without requiring a trained AI model.

AI / Machine Learning

AI-based detection is used for component identification, where visual appearance and object characteristics are more useful than simple geometric rules.

The AI layer can identify components such as:

* Bolt
* Nut
* Washer
* Shaft
* Plate
* Bracket
* Gear

Classical computer vision is then used where appropriate to extract measurable geometric features from the detected object.


3. Calibration Approach

Accurate real-world measurement requires a relationship between image pixels and physical dimensions.

The system therefore uses a known-size reference object such as a ruler, calibration marker, or known-size component.

The basic relationship is:

Scale = Known physical dimension / Measured pixel dimension

Then:

Real dimension = Object pixel dimension × Scale

The reference is detected automatically where possible, reducing manual calibration.

The calibration reference and method are included in the inspection report.

Perspective is an important limitation. The most reliable measurements are obtained when the component and reference are approximately on the same plane and the camera is positioned close to perpendicular to that plane.


4. AI vs Classical Computer Vision

AI is used for:

* Component identification
* Object detection
* Classification
* Estimating component type when visual characteristics are complex

AI is appropriate for these tasks because mechanical components can have different orientations, backgrounds and appearances.

Classical computer vision is used for:

* Edge detection
* Contour extraction
* Diameter estimation
* Length and width measurement
* Hole detection
* Distance measurement
* Geometric feature extraction

Classical CV is preferred for these measurements because the geometric information can be extracted directly from image pixels after calibration.

This hybrid approach avoids using AI for measurements that can be determined more transparently using geometry.


5. Error and Uncertainty Model

Measurements obtained from a smartphone image are affected by several sources of uncertainty:

1. Camera resolution – limited pixel resolution affects the precision of edge locations.
2. Perspective distortion – measurements become less reliable when the object is viewed at an angle.
3. Lens distortion – smartphone lenses can introduce geometric distortion.
4. Reference detection error – an incorrect reference dimension produces an incorrect scale.
5. Object boundary detection – unclear or damaged edges can change the detected dimensions.
6. Lighting and shadows – poor lighting can affect edge and contour detection.
7. Object positioning – the component and reference should ideally lie in the same plane.

Therefore, measurements should be treated as estimates with uncertainty rather than as equivalent to precision metrology equipment.

The system reports confidence and identifies situations where the available image does not provide sufficient information for a reliable measurement.


6. Reliable vs Unreliable Measurements

Measurements that can be relatively reliable

Under controlled image conditions and with a suitable reference:

* Overall 2D length
* Overall 2D width
* Outer diameter
* Hole diameter
* Hole-to-hole distance
* Slot length
* Edge-to-hole distance
* Basic angles
* Relative geometric dimensions

Measurements that are NOT reliably determined from a single ordinary image

* True 3D height/depth
* Thickness when it is not visible
* Hidden dimensions
* Internal features that cannot be seen
* Accurate thread pitch from a poor-quality image
* Dimensions strongly affected by perspective
* Precision/tolerance measurements requiring metrology-grade equipment

For these cases, the system should request additional views or clearly mark the result as estimated/insufficient rather than presenting an unreliable value as an exact measurement.


7. Inspection Result

The system checks the detected component for visible abnormalities such as:

* Damaged or irregular edges
* Missing features
* Incorrect geometry
* Visible surface damage
* Deformation
* Incorrect holes or features

The final result can be presented as:

PASS – component satisfies the available inspection criteria.

FAIL – a visible defect or dimensional issue is detected.

INSUFFICIENT DATA – the available camera view does not provide enough information for a reliable conclusion.


8. Engineering Limitations

This prototype is intended as a smartphone-based inspection aid rather than a replacement for industrial metrology equipment.

The reliability of measurements depends strongly on:

* Camera quality
* Lighting
* Camera angle
* Calibration quality
* Object positioning
* Visibility of the required features

Where a measurement cannot be reliably obtained, the system should communicate the limitation instead of generating a false precise value.

9. Output

The system generates an inspection report containing:

* Component image
* Identified component
* Calibration/reference method
* Measured dimensions
* Inspection result
* Detected defects
* Confidence information
* Date and time
* Standards/database information where applicable
