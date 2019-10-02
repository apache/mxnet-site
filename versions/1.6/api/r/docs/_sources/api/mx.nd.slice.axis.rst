

``mx.nd.slice.axis``
========================================

Description
----------------------

Slices along a given axis.
Returns an array slice along a given `axis` starting from the `begin` index
to the `end` index.


**Example**::

	 x = [[  1.,   2.,   3.,   4.],
	 [  5.,   6.,   7.,   8.],
	 [  9.,  10.,  11.,  12.]]
	 slice_axis(x, axis=0, begin=1, end=3) = [[  5.,   6.,   7.,   8.],
	 [  9.,  10.,  11.,  12.]]
	 slice_axis(x, axis=1, begin=0, end=2) = [[  1.,   2.],
	 [  5.,   6.],
	 [  9.,  10.]]
	 slice_axis(x, axis=1, begin=-3, end=-1) = [[  2.,   3.],
	 [  6.,   7.],
	 [ 10.,  11.]]
	 
	 
Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Source input                                               |
+----------------------------------------+------------------------------------------------------------+
| ``axis``                               | int, required.                                             |
|                                        |                                                            |
|                                        | Axis along which to be sliced, supports negative indexes.  |
+----------------------------------------+------------------------------------------------------------+
| ``begin``                              | int, required.                                             |
|                                        |                                                            |
|                                        | The beginning index along the axis to be sliced, supports  |
|                                        | negative                                                   |
|                                        | indexes.                                                   |
+----------------------------------------+------------------------------------------------------------+
| ``end``                                | int or None, required.                                     |
|                                        |                                                            |
|                                        | The ending index along the axis to be sliced, supports     |
|                                        | negative                                                   |
|                                        | indexes.                                                   |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/matrix_op.cc#L571

