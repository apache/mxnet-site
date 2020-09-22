

``mx.symbol.argmin``
========================================

Description
----------------------

Returns indices of the minimum values along an axis.

In the case of multiple occurrences of minimum values, the indices corresponding to the first occurrence
are returned.


**Example**::

	 
	 x = [[ 0.,  1.,  2.],
	 [ 3.,  4.,  5.]]
	 
	 // argmin along axis 0
	 argmin(x, axis=0) = [ 0.,  0.,  0.]
	 
	 // argmin along axis 1
	 argmin(x, axis=1) = [ 0.,  0.]
	 
	 // argmin along axis 1 keeping same dims as an input array
	 argmin(x, axis=1, keepdims=True) = [[ 0.],
	 [ 0.]]
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.argmin(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input                                                  |
+----------------------------------------+------------------------------------------------------------+
| ``axis``                               | int or None, optional, default='None'.                     |
|                                        |                                                            |
|                                        | The axis along which to perform the reduction. Negative    |
|                                        | values means indexing from right to left. ``Requires axis  |
|                                        | to be set as int, because global reduction is not          |
|                                        | supported                                                  |
|                                        | yet.``                                                     |
+----------------------------------------+------------------------------------------------------------+
| ``keepdims``                           | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | If this is set to `True`, the reduced axis is left in the  |
|                                        | result as dimension with size                              |
|                                        | one.                                                       |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/broadcast_reduce_op_index.cc#L77

