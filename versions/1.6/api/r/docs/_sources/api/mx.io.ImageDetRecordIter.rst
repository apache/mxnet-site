

``mx.io.ImageDetRecordIter``
========================================================

Description
----------------------

Create iterator for image detection dataset packed in recordio.

Usage
----------

.. code:: r

	mx.io.ImageDetRecordIter(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``path.imglist``                       | string, optional, default=''.                              |
|                                        |                                                            |
|                                        | Dataset Param: Path to image list.                         |
+----------------------------------------+------------------------------------------------------------+
| ``path.imgrec``                        | string, optional, default='./data/imgrec.rec'.             |
|                                        |                                                            |
|                                        | Dataset Param: Path to image record file.                  |
+----------------------------------------+------------------------------------------------------------+
| ``aug.seq``                            | string, optional, default='det_aug_default'.               |
|                                        |                                                            |
|                                        | Augmentation Param: the augmenter names to represent       |
|                                        | sequence of augmenters to be applied, seperated by comma.  |
|                                        | Additional keyword parameters will be seen by these        |
|                                        | augmenters. Make sure you don't use normal augmenters for  |
|                                        | detection                                                  |
|                                        | tasks.                                                     |
+----------------------------------------+------------------------------------------------------------+
| ``label.width``                        | int, optional, default='-1'.                               |
|                                        |                                                            |
|                                        | Dataset Param: How many labels for an image, -1 for        |
|                                        | variable label                                             |
|                                        | size.                                                      |
+----------------------------------------+------------------------------------------------------------+
| ``preprocess.threads``                 | int, optional, default='4'.                                |
|                                        |                                                            |
|                                        | Backend Param: Number of thread to do preprocessing.       |
+----------------------------------------+------------------------------------------------------------+
| ``verbose``                            | boolean, optional, default=1.                              |
|                                        |                                                            |
|                                        | Auxiliary Param: Whether to output parser information.     |
+----------------------------------------+------------------------------------------------------------+
| ``num.parts``                          | int, optional, default='1'.                                |
|                                        |                                                            |
|                                        | partition the data into multiple parts                     |
+----------------------------------------+------------------------------------------------------------+
| ``part.index``                         | int, optional, default='0'.                                |
|                                        |                                                            |
|                                        | the index of the part will read                            |
+----------------------------------------+------------------------------------------------------------+
| ``shuffle.chunk.size``                 | long (non-negative), optional, default=0.                  |
|                                        |                                                            |
|                                        | the size(MB) of the shuffle chunk, used with shuffle=True, |
|                                        | it can enable global                                       |
|                                        | shuffling                                                  |
+----------------------------------------+------------------------------------------------------------+
| ``shuffle.chunk.seed``                 | int, optional, default='0'.                                |
|                                        |                                                            |
|                                        | the seed for chunk shuffling                               |
+----------------------------------------+------------------------------------------------------------+
| ``label.pad.width``                    | int, optional, default='0'.                                |
|                                        |                                                            |
|                                        | pad output label width if set larger than 0, -1 for auto   |
|                                        | estimate                                                   |
+----------------------------------------+------------------------------------------------------------+
| ``label.pad.value``                    | float, optional, default=-1.                               |
|                                        |                                                            |
|                                        | label padding value if enabled                             |
+----------------------------------------+------------------------------------------------------------+
| ``shuffle``                            | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | Augmentation Param: Whether to shuffle data.               |
+----------------------------------------+------------------------------------------------------------+
| ``seed``                               | int, optional, default='0'.                                |
|                                        |                                                            |
|                                        | Augmentation Param: Random Seed.                           |
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
|                                        | Augmentation Param: scale shorter edge to size before      |
|                                        | applying other augmentations, -1 to                        |
|                                        | disable.                                                   |
+----------------------------------------+------------------------------------------------------------+
| ``rand.crop.prob``                     | float, optional, default=0.                                |
|                                        |                                                            |
|                                        | Augmentation Param: Probability of random cropping, <= 0   |
|                                        | to                                                         |
|                                        | disable                                                    |
+----------------------------------------+------------------------------------------------------------+
| ``min.crop.scales``                    | tuple of <float>, optional, default=[0].                   |
|                                        |                                                            |
|                                        | Augmentation Param: Min crop scales.                       |
+----------------------------------------+------------------------------------------------------------+
| ``max.crop.scales``                    | tuple of <float>, optional, default=[1].                   |
|                                        |                                                            |
|                                        | Augmentation Param: Max crop scales.                       |
+----------------------------------------+------------------------------------------------------------+
| ``min.crop.aspect.ratios``             | tuple of <float>, optional, default=[1].                   |
|                                        |                                                            |
|                                        | Augmentation Param: Min crop aspect ratios.                |
+----------------------------------------+------------------------------------------------------------+
| ``max.crop.aspect.ratios``             | tuple of <float>, optional, default=[1].                   |
|                                        |                                                            |
|                                        | Augmentation Param: Max crop aspect ratios.                |
+----------------------------------------+------------------------------------------------------------+
| ``min.crop.overlaps``                  | tuple of <float>, optional, default=[0].                   |
|                                        |                                                            |
|                                        | Augmentation Param: Minimum crop IOU between crop_box and  |
|                                        | ground-truths.                                             |
+----------------------------------------+------------------------------------------------------------+
| ``max.crop.overlaps``                  | tuple of <float>, optional, default=[1].                   |
|                                        |                                                            |
|                                        | Augmentation Param: Maximum crop IOU between crop_box and  |
|                                        | ground-truth.                                              |
+----------------------------------------+------------------------------------------------------------+
| ``min.crop.sample.coverages``          | tuple of <float>, optional, default=[0].                   |
|                                        |                                                            |
|                                        | Augmentation Param: Minimum ratio of intersect/crop_area   |
|                                        | between crop box and                                       |
|                                        | ground-truths.                                             |
+----------------------------------------+------------------------------------------------------------+
| ``max.crop.sample.coverages``          | tuple of <float>, optional, default=[1].                   |
|                                        |                                                            |
|                                        | Augmentation Param: Maximum ratio of intersect/crop_area   |
|                                        | between crop box and                                       |
|                                        | ground-truths.                                             |
+----------------------------------------+------------------------------------------------------------+
| ``min.crop.object.coverages``          | tuple of <float>, optional, default=[0].                   |
|                                        |                                                            |
|                                        | Augmentation Param: Minimum ratio of intersect/gt_area     |
|                                        | between crop box and                                       |
|                                        | ground-truths.                                             |
+----------------------------------------+------------------------------------------------------------+
| ``max.crop.object.coverages``          | tuple of <float>, optional, default=[1].                   |
|                                        |                                                            |
|                                        | Augmentation Param: Maximum ratio of intersect/gt_area     |
|                                        | between crop box and                                       |
|                                        | ground-truths.                                             |
+----------------------------------------+------------------------------------------------------------+
| ``num.crop.sampler``                   | int, optional, default='1'.                                |
|                                        |                                                            |
|                                        | Augmentation Param: Number of crop samplers.               |
+----------------------------------------+------------------------------------------------------------+
| ``crop.emit.mode``                     | {'center', 'overlap'},optional, default='center'.          |
|                                        |                                                            |
|                                        | Augmentation Param: Emition mode for invalid ground-truths |
|                                        | after crop. center: emit if centroid of object is out of   |
|                                        | crop region; overlap: emit if overlap is less than         |
|                                        | emit_overlap_thresh.                                       |
+----------------------------------------+------------------------------------------------------------+
| ``emit.overlap.thresh``                | float, optional, default=0.300000012.                      |
|                                        |                                                            |
|                                        | Augmentation Param: Emit overlap thresh for emit mode      |
|                                        | overlap                                                    |
|                                        | only.                                                      |
+----------------------------------------+------------------------------------------------------------+
| ``max.crop.trials``                    | Shape(tuple), optional, default=[25].                      |
|                                        |                                                            |
|                                        | Augmentation Param: Skip cropping if fail crop trail count |
|                                        | exceeds this                                               |
|                                        | number.                                                    |
+----------------------------------------+------------------------------------------------------------+
| ``rand.pad.prob``                      | float, optional, default=0.                                |
|                                        |                                                            |
|                                        | Augmentation Param: Probability for random padding.        |
+----------------------------------------+------------------------------------------------------------+
| ``max.pad.scale``                      | float, optional, default=1.                                |
|                                        |                                                            |
|                                        | Augmentation Param: Maximum padding scale.                 |
+----------------------------------------+------------------------------------------------------------+
| ``max.random.hue``                     | int, optional, default='0'.                                |
|                                        |                                                            |
|                                        | Augmentation Param: Maximum random value of H channel in   |
|                                        | HSL color                                                  |
|                                        | space.                                                     |
+----------------------------------------+------------------------------------------------------------+
| ``random.hue.prob``                    | float, optional, default=0.                                |
|                                        |                                                            |
|                                        | Augmentation Param: Probability to apply random hue.       |
+----------------------------------------+------------------------------------------------------------+
| ``max.random.saturation``              | int, optional, default='0'.                                |
|                                        |                                                            |
|                                        | Augmentation Param: Maximum random value of S channel in   |
|                                        | HSL color                                                  |
|                                        | space.                                                     |
+----------------------------------------+------------------------------------------------------------+
| ``random.saturation.prob``             | float, optional, default=0.                                |
|                                        |                                                            |
|                                        | Augmentation Param: Probability to apply random            |
|                                        | saturation.                                                |
+----------------------------------------+------------------------------------------------------------+
| ``max.random.illumination``            | int, optional, default='0'.                                |
|                                        |                                                            |
|                                        | Augmentation Param: Maximum random value of L channel in   |
|                                        | HSL color                                                  |
|                                        | space.                                                     |
+----------------------------------------+------------------------------------------------------------+
| ``random.illumination.prob``           | float, optional, default=0.                                |
|                                        |                                                            |
|                                        | Augmentation Param: Probability to apply random            |
|                                        | illumination.                                              |
+----------------------------------------+------------------------------------------------------------+
| ``max.random.contrast``                | float, optional, default=0.                                |
|                                        |                                                            |
|                                        | Augmentation Param: Maximum random value of delta          |
|                                        | contrast.                                                  |
+----------------------------------------+------------------------------------------------------------+
| ``random.contrast.prob``               | float, optional, default=0.                                |
|                                        |                                                            |
|                                        | Augmentation Param: Probability to apply random contrast.  |
+----------------------------------------+------------------------------------------------------------+
| ``rand.mirror.prob``                   | float, optional, default=0.                                |
|                                        |                                                            |
|                                        | Augmentation Param: Probability to apply horizontal flip   |
|                                        | aka.                                                       |
|                                        | mirror.                                                    |
+----------------------------------------+------------------------------------------------------------+
| ``fill.value``                         | int, optional, default='127'.                              |
|                                        |                                                            |
|                                        | Augmentation Param: Filled color value while padding.      |
+----------------------------------------+------------------------------------------------------------+
| ``inter.method``                       | int, optional, default='1'.                                |
|                                        |                                                            |
|                                        | Augmentation Param: 0-NN 1-bilinear 2-cubic 3-area         |
|                                        | 4-lanczos4 9-auto                                          |
|                                        | 10-rand.                                                   |
+----------------------------------------+------------------------------------------------------------+
| ``data.shape``                         | Shape(tuple), required.                                    |
|                                        |                                                            |
|                                        | Dataset Param: Shape of each instance generated by the     |
|                                        | DataIter.                                                  |
+----------------------------------------+------------------------------------------------------------+
| ``resize.mode``                        | {'fit', 'force', 'shrink'},optional, default='force'.      |
|                                        |                                                            |
|                                        | Augmentation Param: How image data fit in data_shape.      |
|                                        | force: force reshape to data_shape regardless of aspect    |
|                                        | ratio; shrink: ensure each side fit in data_shape,         |
|                                        | preserve aspect ratio; fit: fit image to data_shape,       |
|                                        | preserve ratio, will upscale if                            |
|                                        | applicable.                                                |
+----------------------------------------+------------------------------------------------------------+
| ``mean.img``                           | string, optional, default=''.                              |
|                                        |                                                            |
|                                        | Augmentation Param: Mean Image to be subtracted.           |
+----------------------------------------+------------------------------------------------------------+
| ``mean.r``                             | float, optional, default=0.                                |
|                                        |                                                            |
|                                        | Augmentation Param: Mean value on R channel.               |
+----------------------------------------+------------------------------------------------------------+
| ``mean.g``                             | float, optional, default=0.                                |
|                                        |                                                            |
|                                        | Augmentation Param: Mean value on G channel.               |
+----------------------------------------+------------------------------------------------------------+
| ``mean.b``                             | float, optional, default=0.                                |
|                                        |                                                            |
|                                        | Augmentation Param: Mean value on B channel.               |
+----------------------------------------+------------------------------------------------------------+
| ``mean.a``                             | float, optional, default=0.                                |
|                                        |                                                            |
|                                        | Augmentation Param: Mean value on Alpha channel.           |
+----------------------------------------+------------------------------------------------------------+
| ``std.r``                              | float, optional, default=0.                                |
|                                        |                                                            |
|                                        | Augmentation Param: Standard deviation on R channel.       |
+----------------------------------------+------------------------------------------------------------+
| ``std.g``                              | float, optional, default=0.                                |
|                                        |                                                            |
|                                        | Augmentation Param: Standard deviation on G channel.       |
+----------------------------------------+------------------------------------------------------------+
| ``std.b``                              | float, optional, default=0.                                |
|                                        |                                                            |
|                                        | Augmentation Param: Standard deviation on B channel.       |
+----------------------------------------+------------------------------------------------------------+
| ``std.a``                              | float, optional, default=0.                                |
|                                        |                                                            |
|                                        | Augmentation Param: Standard deviation on Alpha channel.   |
+----------------------------------------+------------------------------------------------------------+
| ``scale``                              | float, optional, default=1.                                |
|                                        |                                                            |
|                                        | Augmentation Param: Scale in color space.                  |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``iter`` The result mx.dataiter


