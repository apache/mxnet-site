

``mx.nd.sort``
============================

Description
----------------------

Returns a sorted copy of an input array along the given axis.


**Example**::

	 
	 x = [[ 1, 4],
	 [ 3, 1]]
	 
	 // sorts along the last axis
	 sort(x) = [[ 1.,  4.],
	 [ 1.,  3.]]
	 
	 // flattens and then sorts
	 sort(x, axis=None) = [ 1.,  1.,  3.,  4.]
	 
	 // sorts along the first axis
	 sort(x, axis=0) = [[ 1.,  1.],
	 [ 3.,  4.]]
	 
	 // in a descend order
	 sort(x, is_ascend=0) = [[ 4.,  1.],
	 [ 3.,  1.]]
	 
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input array                                            |
+----------------------------------------+------------------------------------------------------------+
| ``axis``                               | int or None, optional, default='-1'.                       |
|                                        |                                                            |
|                                        | Axis along which to choose sort the input tensor. If not   |
|                                        | given, the flattened array is used. Default is             |
|                                        | -1.                                                        |
+----------------------------------------+------------------------------------------------------------+
| ``is.ascend``                          | boolean, optional, default=1.                              |
|                                        |                                                            |
|                                        | Whether to sort in ascending or descending order.          |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/ordering_op.cc#L132

