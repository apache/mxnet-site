

``mx.io.MNISTIter``
======================================

Description
----------------------

Iterating on the MNIST dataset.

One can download the dataset from http://yann.lecun.com/exdb/mnist/


Usage
----------

.. code:: r

	mx.io.MNISTIter(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``image``                              | string, optional, default='./train-images-idx3-ubyte'.     |
|                                        |                                                            |
|                                        | Dataset Param: Mnist image path.                           |
+----------------------------------------+------------------------------------------------------------+
| ``label``                              | string, optional, default='./train-labels-idx1-ubyte'.     |
|                                        |                                                            |
|                                        | Dataset Param: Mnist label path.                           |
+----------------------------------------+------------------------------------------------------------+
| ``batch.size``                         | int, optional, default='128'.                              |
|                                        |                                                            |
|                                        | Batch Param: Batch Size.                                   |
+----------------------------------------+------------------------------------------------------------+
| ``shuffle``                            | boolean, optional, default=1.                              |
|                                        |                                                            |
|                                        | Augmentation Param: Whether to shuffle data.               |
+----------------------------------------+------------------------------------------------------------+
| ``flat``                               | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | Augmentation Param: Whether to flat the data into 1D.      |
+----------------------------------------+------------------------------------------------------------+
| ``seed``                               | int, optional, default='0'.                                |
|                                        |                                                            |
|                                        | Augmentation Param: Random Seed.                           |
+----------------------------------------+------------------------------------------------------------+
| ``silent``                             | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | Auxiliary Param: Whether to print out data info.           |
+----------------------------------------+------------------------------------------------------------+
| ``num.parts``                          | int, optional, default='1'.                                |
|                                        |                                                            |
|                                        | partition the data into multiple parts                     |
+----------------------------------------+------------------------------------------------------------+
| ``part.index``                         | int, optional, default='0'.                                |
|                                        |                                                            |
|                                        | the index of the part will read                            |
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

Value
----------

``iter`` The result mx.dataiter


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/io/iter_mnist.cc#L265

