

``im2rec``
====================

Description
----------------------

Convert images into image recordio format

Usage
----------

.. code:: r

	im2rec(

	  image_lst,

	  root,

	  output_rec,

	  label_width = 1L,

	  pack_label = 0L,

	  new_size = -1L,

	  nsplit = 1L,

	  partid = 0L,

	  center_crop = 0L,

	  quality = 95L,

	  color_mode = 1L,

	  unchanged = 0L,

	  inter_method = 1L,

	  encoding = ".jpg"

	)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``image_lst``                          | The image lst file                                         |
+----------------------------------------+------------------------------------------------------------+
| ``root``                               | The root folder for image files                            |
+----------------------------------------+------------------------------------------------------------+
| ``output_rec``                         | The output rec file                                        |
+----------------------------------------+------------------------------------------------------------+
| ``label_width``                        | The label width in the list file. Default is 1.            |
+----------------------------------------+------------------------------------------------------------+
| ``pack_label``                         | Whether to also pack multi dimenional label in the record  |
|                                        | file. Default is                                           |
|                                        | 0.                                                         |
+----------------------------------------+------------------------------------------------------------+
| ``new_size``                           | The shorter edge of image will be resized to the newsize.  |
|                                        |                                                            |
|                                        | Original images will be packed by default.                 |
+----------------------------------------+------------------------------------------------------------+
| ``nsplit``                             | It is used for part generation, logically split the        |
|                                        | image.lst to NSPLIT parts by                               |
|                                        | position.                                                  |
|                                        |                                                            |
|                                        | Default is 1.                                              |
+----------------------------------------+------------------------------------------------------------+
| ``partid``                             | It is used for part generation, pack the images from the   |
|                                        | specific part in                                           |
|                                        | image.lst.                                                 |
|                                        |                                                            |
|                                        | Default is 0.                                              |
+----------------------------------------+------------------------------------------------------------+
| ``center_crop``                        | Whether to crop the center image to make it square.        |
|                                        | Default is                                                 |
|                                        | 0.                                                         |
+----------------------------------------+------------------------------------------------------------+
| ``quality``                            | JPEG quality for encoding (1-100, default: 95) or PNG      |
|                                        | compression for encoding (1-9, default:                    |
|                                        | 3).                                                        |
+----------------------------------------+------------------------------------------------------------+
| ``color_mode``                         | Force color (1), gray image (0) or keep source unchanged   |
|                                        | (-1). Default is                                           |
|                                        | 1.                                                         |
+----------------------------------------+------------------------------------------------------------+
| ``unchanged``                          | Keep the original image encoding, size and color. If set   |
|                                        | to 1, it will ignore the others                            |
|                                        | parameters.                                                |
+----------------------------------------+------------------------------------------------------------+
| ``inter_method``                       | NN(0), BILINEAR(1), CUBIC(2), AREA(3), LANCZOS4(4),        |
|                                        | AUTO(9), RAND(10). Default is                              |
|                                        | 1.                                                         |
+----------------------------------------+------------------------------------------------------------+
| ``encoding``                           | The encoding type for images. It can be '.jpg' or '.png'.  |
|                                        | Default is                                                 |
|                                        | '.jpg'.                                                    |
+----------------------------------------+------------------------------------------------------------+



