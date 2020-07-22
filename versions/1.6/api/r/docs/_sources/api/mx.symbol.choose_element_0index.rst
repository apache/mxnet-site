

``mx.symbol.choose_element_0index``
======================================================================

Description
----------------------

Picks elements from an input array according to the input indices along the given axis.

Given an input array of shape ``(d0, d1)`` and indices of shape ``(i0,)``, the result will be
an output array of shape ``(i0,)`` with::

	 output[i] = input[i, indices[i]]
	 
	 By default, if any index mentioned is too large, it is replaced by the index that addresses
	 the last element along an axis (the `clip` mode).
	 
	 This function supports n-dimensional input and (n-1)-dimensional indices arrays.
	 

**Example**::

	 
	 x = [[ 1.,  2.],
	 [ 3.,  4.],
	 [ 5.,  6.]]
	 
	 // picks elements with specified indices along axis 0
	 pick(x, y=[0,1], 0) = [ 1.,  4.]
	 
	 // picks elements with specified indices along axis 1
	 pick(x, y=[0,1,0], 1) = [ 1.,  4.,  5.]
	 
	 y = [[ 1.],
	 [ 0.],
	 [ 2.]]
	 
	 // picks elements with specified indices along axis 1 using 'wrap' mode
	 // to place indicies that would normally be out of bounds
	 pick(x, y=[2,-1,-2], 1, mode='wrap') = [ 1.,  4.,  5.]
	 
	 y = [[ 1.],
	 [ 0.],
	 [ 2.]]
	 
	 // picks elements with specified indices along axis 1 and dims are maintained
	 pick(x,y, 1, keepdims=True) = [[ 2.],
	 [ 3.],
	 [ 6.]]
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.choose_element_0index(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input array                                            |
+----------------------------------------+------------------------------------------------------------+
| ``index``                              | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The index array                                            |
+----------------------------------------+------------------------------------------------------------+
| ``axis``                               | int or None, optional, default='-1'.                       |
|                                        |                                                            |
|                                        | int or None. The axis to picking the elements. Negative    |
|                                        | values means indexing from right to left. If is `None`,    |
|                                        | the elements in the index w.r.t the flattened input will   |
|                                        | be                                                         |
|                                        | picked.                                                    |
+----------------------------------------+------------------------------------------------------------+
| ``keepdims``                           | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | If true, the axis where we pick the elements is left in    |
|                                        | the result as dimension with size                          |
|                                        | one.                                                       |
+----------------------------------------+------------------------------------------------------------+
| ``mode``                               | {'clip', 'wrap'},optional, default='clip'.                 |
|                                        |                                                            |
|                                        | Specify how out-of-bound indices behave. Default is        |
|                                        | "clip". "clip" means clip to the range. So, if all indices |
|                                        | mentioned are too large, they are replaced by the index    |
|                                        | that addresses the last element along an axis. "wrap"      |
|                                        | means to wrap                                              |
|                                        | around.                                                    |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/broadcast_reduce_op_index.cc#L155

