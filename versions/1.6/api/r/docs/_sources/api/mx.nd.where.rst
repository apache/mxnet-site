

``mx.nd.where``
==============================

Description
----------------------

Return the elements, either from x or y, depending on the condition.

Given three ndarrays, condition, x, and y, return an ndarray with the elements from x or y,
depending on the elements from condition are true or false. x and y must have the same shape.
If condition has the same shape as x, each element in the output array is from x if the
corresponding element in the condition is true, and from y if false.

If condition does not have the same shape as x, it must be a 1D array whose size is
the same as x's first dimension size. Each row of the output array is from x's row
if the corresponding element from condition is true, and from y's row if false.

Note that all non-zero values are interpreted as ``True`` in condition.


**Example**::

	 
	 x = [[1, 2], [3, 4]]
	 y = [[5, 6], [7, 8]]
	 cond = [[0, 1], [-1, 0]]
	 
	 where(cond, x, y) = [[5, 2], [3, 8]]
	 
	 csr_cond = cast_storage(cond, 'csr')
	 
	 where(csr_cond, x, y) = [[5, 2], [3, 8]]
	 
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``condition``                          | NDArray-or-Symbol                                          |
|                                        | condition array                                            |
+----------------------------------------+------------------------------------------------------------+
| ``x``                                  | NDArray-or-Symbol                                          |
+----------------------------------------+------------------------------------------------------------+
| ``y``                                  | NDArray-or-Symbol                                          |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/control_flow_op.cc#L57

