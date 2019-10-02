

``mx.io.ImageRecordUInt8Iter``
============================================================

Description
----------------------

Iterating on image RecordIO files.  


.. note:: ImageRecordUInt8Iter is deprecated. Use ImageRecordIter(dtype='uint8') instead.

This iterator is identical to ``ImageRecordIter`` except for using ``uint8`` as
the data type instead of ``float``.




Usage
----------

.. code:: r

	mx.io.ImageRecordUInt8Iter(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``path.imglist``                       | string, optional, default=''.                              |
|                                        |                                                            |
|                                        | Path to the image list (.lst) file. Generally created with |
|                                        | tools/im2rec.py. Format (Tab separated): <index of record> |
|                                        | <one or more labels> <relative path from root              |
|                                        | folder>.                                                   |
+----------------------------------------+------------------------------------------------------------+
| ``path.imgrec``                        | string, optional, default=''.                              |
|                                        |                                                            |
|                                        | Path to the image RecordIO (.rec) file or a directory      |
|                                        | path. Created with                                         |
|                                        | tools/im2rec.py.                                           |
+----------------------------------------+------------------------------------------------------------+
| ``path.imgidx``                        | string, optional, default=''.                              |
|                                        |                                                            |
|                                        | Path to the image RecordIO index (.idx) file. Created with |
|                                        | tools/im2rec.py.                                           |
+----------------------------------------+------------------------------------------------------------+
| ``aug.seq``                            | string, optional, default='aug_default'.                   |
|                                        |                                                            |
|                                        | The augmenter names to represent sequence of augmenters to |
|                                        | be applied, seperated by comma. Additional keyword         |
|                                        | parameters will be seen by these                           |
|                                        | augmenters.                                                |
+----------------------------------------+------------------------------------------------------------+
| ``label.width``                        | int, optional, default='1'.                                |
|                                        |                                                            |
|                                        | The number of labels per image.                            |
+----------------------------------------+------------------------------------------------------------+
| ``preprocess.threads``                 | int, optional, default='4'.                                |
|                                        |                                                            |
|                                        | The number of threads to do preprocessing.                 |
+----------------------------------------+------------------------------------------------------------+
| ``verbose``                            | boolean, optional, default=1.                              |
|                                        |                                                            |
|                                        | If or not output verbose information.                      |
+----------------------------------------+------------------------------------------------------------+
| ``num.parts``                          | int, optional, default='1'.                                |
|                                        |                                                            |
|                                        | Virtually partition the data into these many parts.        |
+----------------------------------------+------------------------------------------------------------+
| ``part.index``                         | int, optional, default='0'.                                |
|                                        |                                                            |
|                                        | The *i*-th virtual partition to be read.                   |
+----------------------------------------+------------------------------------------------------------+
| ``device.id``                          | int, optional, default='0'.                                |
|                                        |                                                            |
|                                        | The device id used to create context for internal NDArray. |
|                                        | Setting device_id to -1 will create Context::CPU(0).       |
	 |                                        | Setting device_id to valid positive device id will create  |
	 |                                        | Context::CPUPinned(device_id). Default is                  |
	 |                                        | 0.                                                         |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``shuffle.chunk.size``                 | long (non-negative), optional, default=0.                  |
	 |                                        |                                                            |
	 |                                        | The data shuffle buffer size in MB. Only valid if shuffle  |
	 |                                        | is                                                         |
	 |                                        | true.                                                      |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``shuffle.chunk.seed``                 | int, optional, default='0'.                                |
	 |                                        |                                                            |
	 |                                        | The random seed for shuffling                              |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``seed.aug``                           | int or None, optional, default='None'.                     |
	 |                                        |                                                            |
	 |                                        | Random seed for augmentations.                             |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``shuffle``                            | boolean, optional, default=0.                              |
	 |                                        |                                                            |
	 |                                        | Whether to shuffle data randomly or not.                   |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``seed``                               | int, optional, default='0'.                                |
	 |                                        |                                                            |
	 |                                        | The random seed.                                           |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``batch.size``                         | int (non-negative), required.                              |
	 |                                        |                                                            |
	 |                                        | Batch size.                                                |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``round.batch``                        | boolean, optional, default=1.                              |
	 |                                        |                                                            |
	 |                                        | Whether to use round robin to handle overflow batch or     |
	 |                                        | not.                                                       |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``prefetch.buffer``                    | long (non-negative), optional, default=4.                  |
	 |                                        |                                                            |
	 |                                        | Maximum number of batches to prefetch.                     |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``ctx``                                | {'cpu', 'gpu'},optional, default='gpu'.                    |
	 |                                        |                                                            |
	 |                                        | Context data loader optimized for.                         |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``dtype``                              | {None, 'float16', 'float32', 'float64', 'int32', 'int64',  |
	 |                                        | 'int8', 'uint8'},optional,                                 |
	 |                                        | default='None'.                                            |
	 |                                        |                                                            |
	 |                                        | Output data type. ``None`` means no change.                |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``resize``                             | int, optional, default='-1'.                               |
	 |                                        |                                                            |
	 |                                        | Down scale the shorter edge to a new size before applying  |
	 |                                        | other                                                      |
	 |                                        | augmentations.                                             |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``rand.crop``                          | boolean, optional, default=0.                              |
	 |                                        |                                                            |
	 |                                        | If or not randomly crop the image                          |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``random.resized.crop``                | boolean, optional, default=0.                              |
	 |                                        |                                                            |
	 |                                        | If or not perform random resized cropping on the image, as |
	 |                                        | a standard preprocessing for resnet training on ImageNet   |
	 |                                        | data.                                                      |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``max.rotate.angle``                   | int, optional, default='0'.                                |
	 |                                        |                                                            |
	 |                                        | Rotate by a random degree in ``[-v, v]``                   |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``max.aspect.ratio``                   | float, optional, default=0.                                |
	 |                                        |                                                            |
	 |                                        | Change the aspect (namely width/height) to a random value. |
	 |                                        | If min_aspect_ratio is None then the aspect ratio ins      |
	 |                                        | sampled from [1 - max_aspect_ratio, 1 + max_aspect_ratio], |
	 |                                        | else it is in ``[min_aspect_ratio,                         |
	 |                                        | max_aspect_ratio]``                                        |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``min.aspect.ratio``                   | float or None, optional, default=None.                     |
	 |                                        |                                                            |
	 |                                        | Change the aspect (namely width/height) to a random value  |
	 |                                        | in ``[min_aspect_ratio,                                    |
	 |                                        | max_aspect_ratio]``                                        |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``max.shear.ratio``                    | float, optional, default=0.                                |
	 |                                        |                                                            |
	 |                                        | Apply a shear transformation (namely ``(x,y)->(x+my,y)``)  |
	 |                                        | with ``m`` randomly chose from ``[-max_shear_ratio,        |
	 |                                        | max_shear_ratio]``                                         |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``max.crop.size``                      | int, optional, default='-1'.                               |
	 |                                        |                                                            |
	 |                                        | Crop both width and height into a random size in           |
	 |                                        | ``[min_crop_size, max_crop_size].``Ignored if              |
	 |                                        | ``random_resized_crop`` is                                 |
	 |                                        | True.                                                      |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``min.crop.size``                      | int, optional, default='-1'.                               |
	 |                                        |                                                            |
	 |                                        | Crop both width and height into a random size in           |
	 |                                        | ``[min_crop_size, max_crop_size].``Ignored if              |
	 |                                        | ``random_resized_crop`` is                                 |
	 |                                        | True.                                                      |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``max.random.scale``                   | float, optional, default=1.                                |
	 |                                        |                                                            |
	 |                                        | Resize into ``[width*s, height*s]`` with ``s`` randomly    |
	 |                                        | chosen from ``[min_random_scale, max_random_scale]``.      |
	 |                                        | Ignored if ``random_resized_crop`` is                      |
	 |                                        | True.                                                      |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``min.random.scale``                   | float, optional, default=1.                                |
	 |                                        |                                                            |
	 |                                        | Resize into ``[width*s, height*s]`` with ``s`` randomly    |
	 |                                        | chosen from ``[min_random_scale,                           |
	 |                                        | max_random_scale]``Ignored if ``random_resized_crop`` is   |
	 |                                        | True.                                                      |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``max.random.area``                    | float, optional, default=1.                                |
	 |                                        |                                                            |
	 |                                        | Change the area (namely width * height) to a random value  |
	 |                                        | in ``[min_random_area, max_random_area]``. Ignored if      |
	 |                                        | ``random_resized_crop`` is                                 |
	 |                                        | False.                                                     |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``min.random.area``                    | float, optional, default=1.                                |
	 |                                        |                                                            |
	 |                                        | Change the area (namely width * height) to a random value  |
	 |                                        | in ``[min_random_area, max_random_area]``. Ignored if      |
	 |                                        | ``random_resized_crop`` is                                 |
	 |                                        | False.                                                     |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``max.img.size``                       | float, optional, default=1e+10.                            |
	 |                                        |                                                            |
	 |                                        | Set the maximal width and height after all resize and      |
	 |                                        | rotate argumentation are                                   |
	 |                                        | applied                                                    |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``min.img.size``                       | float, optional, default=0.                                |
	 |                                        |                                                            |
	 |                                        | Set the minimal width and height after all resize and      |
	 |                                        | rotate argumentation are                                   |
	 |                                        | applied                                                    |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``brightness``                         | float, optional, default=0.                                |
	 |                                        |                                                            |
	 |                                        | Add a random value in ``[-brightness, brightness]`` to the |
	 |                                        | brightness of                                              |
	 |                                        | image.                                                     |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``contrast``                           | float, optional, default=0.                                |
	 |                                        |                                                            |
	 |                                        | Add a random value in ``[-contrast, contrast]`` to the     |
	 |                                        | contrast of                                                |
	 |                                        | image.                                                     |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``saturation``                         | float, optional, default=0.                                |
	 |                                        |                                                            |
	 |                                        | Add a random value in ``[-saturation, saturation]`` to the |
	 |                                        | saturation of                                              |
	 |                                        | image.                                                     |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``pca.noise``                          | float, optional, default=0.                                |
	 |                                        |                                                            |
	 |                                        | Add PCA based noise to the image.                          |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``random.h``                           | int, optional, default='0'.                                |
	 |                                        |                                                            |
	 |                                        | Add a random value in ``[-random_h, random_h]`` to the H   |
	 |                                        | channel in HSL color                                       |
	 |                                        | space.                                                     |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``random.s``                           | int, optional, default='0'.                                |
	 |                                        |                                                            |
	 |                                        | Add a random value in ``[-random_s, random_s]`` to the S   |
	 |                                        | channel in HSL color                                       |
	 |                                        | space.                                                     |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``random.l``                           | int, optional, default='0'.                                |
	 |                                        |                                                            |
	 |                                        | Add a random value in ``[-random_l, random_l]`` to the L   |
	 |                                        | channel in HSL color                                       |
	 |                                        | space.                                                     |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``rotate``                             | int, optional, default='-1'.                               |
	 |                                        |                                                            |
	 |                                        | Rotate by an angle. If set, it overwrites the              |
	 |                                        | ``max_rotate_angle``                                       |
	 |                                        | option.                                                    |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``fill.value``                         | int, optional, default='255'.                              |
	 |                                        |                                                            |
	 |                                        | Set the padding pixels value to ``fill_value``.            |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``data.shape``                         | Shape(tuple), required.                                    |
	 |                                        |                                                            |
	 |                                        | The shape of a output image.                               |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``inter.method``                       | int, optional, default='1'.                                |
	 |                                        |                                                            |
	 |                                        | The interpolation method: 0-NN 1-bilinear 2-cubic 3-area   |
	 |                                        | 4-lanczos4 9-auto                                          |
	 |                                        | 10-rand.                                                   |
	 +----------------------------------------+------------------------------------------------------------+
	 | ``pad``                                | int, optional, default='0'.                                |
	 |                                        |                                                            |
	 |                                        | Change size from ``[width, height]`` into ``[pad + width + |
	 |                                        | pad, pad + height + pad]`` by padding                      |
	 |                                        | pixes                                                      |
	 +----------------------------------------+------------------------------------------------------------+
	 
Value
----------

``iter`` The result mx.dataiter


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/io/iter_image_recordio_2.cc#L923

