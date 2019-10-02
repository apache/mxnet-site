

``mx.nd.clip``
============================

Description
----------------------

Clips (limits) the values in an array.
Given an interval, values outside the interval are clipped to the interval edges.
Clipping ``x`` between `a_min` and `a_max` would be::
.. math::
clip(x, a_min, a_max) = \max(\min(x, a_max), a_min)).  

	Defined in src/operator/tensor/matrix_op.cc:L677

**Example**::

	 x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	 clip(x,1,8) = [ 1.,  1.,  2.,  3.,  4.,  5.,  6.,  7.,  8.,  8.]
	 The storage type of ``clip`` output depends on storage types of inputs and the a_min, a_max \
	 parameter values:
	- clip(default) = default
	- clip(row_sparse, a_min <= 0, a_max >= 0) = row_sparse
	- clip(csr, a_min <= 0, a_max >= 0) = csr
	- clip(row_sparse, a_min < 0, a_max < 0) = default
	- clip(row_sparse, a_min > 0, a_max > 0) = default
	- clip(csr, a_min < 0, a_max < 0) = csr
	- clip(csr, a_min > 0, a_max > 0) = csr
	 
	 
Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Input array.                                               |
+----------------------------------------+------------------------------------------------------------+
| ``a.min``                              | float, required.                                           |
|                                        |                                                            |
|                                        | Minimum value                                              |
+----------------------------------------+------------------------------------------------------------+
| ``a.max``                              | float, required.                                           |
|                                        |                                                            |
|                                        | Maximum value                                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


