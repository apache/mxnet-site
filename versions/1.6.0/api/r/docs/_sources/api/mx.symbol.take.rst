

``mx.symbol.take``
====================================

Description
----------------------

Takes elements from an input array along the given axis.

This function slices the input array along a particular axis with the provided indices.

Given data tensor of rank r >= 1, and indices tensor of rank q, gather entries of the axis
dimension of data (by default outer-most one as axis=0) indexed by indices, and concatenates them
in an output tensor of rank q + (r - 1).


**Example**::

	 
	 x = [4.  5.  6.]
	 
	 // Trivial case, take the second element along the first axis.
	 
	 take(x, [1]) = [ 5. ]
	 
	 // The other trivial case, axis=-1, take the third element along the first axis
	 
	 take(x, [3], axis=-1, mode='clip') = [ 6. ]
	 
	 x = [[ 1.,  2.],
	 [ 3.,  4.],
	 [ 5.,  6.]]
	 
	 // In this case we will get rows 0 and 1, then 1 and 2. Along axis 0
	 
	 take(x, [[0,1],[1,2]]) = [[[ 1.,  2.],
	 [ 3.,  4.]],
	 
	 [[ 3.,  4.],
	 [ 5.,  6.]]]
	 
	 // In this case we will get rows 0 and 1, then 1 and 2 (calculated by wrapping around).
	 // Along axis 1
	 
	 take(x, [[0, 3], [-1, -2]], axis=1, mode='wrap') = [[[ 1.  2.]
	 [ 2.  1.]]
	 
	 [[ 3.  4.]
	 [ 4.  3.]]
	 
	 [[ 5.  6.]
	 [ 6.  5.]]]
	 
	 The storage type of ``take`` output depends upon the input storage type:
	 
	- take(default, default) = default
	- take(csr, default, axis=0) = csr
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.take(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``a``                                  | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input array.                                           |
+----------------------------------------+------------------------------------------------------------+
| ``indices``                            | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The indices of the values to be extracted.                 |
+----------------------------------------+------------------------------------------------------------+
| ``axis``                               | int, optional, default='0'.                                |
|                                        |                                                            |
|                                        | The axis of input array to be taken.For input tensor of    |
|                                        | rank r, it could be in the range of [-r,                   |
|                                        | r-1]                                                       |
+----------------------------------------+------------------------------------------------------------+
| ``mode``                               | {'clip', 'raise', 'wrap'},optional, default='clip'.        |
|                                        |                                                            |
|                                        | Specify how out-of-bound indices bahave. Default is        |
|                                        | "clip". "clip" means clip to the range. So, if all indices |
|                                        | mentioned are too large, they are replaced by the index    |
|                                        | that addresses the last element along an axis. "wrap"      |
|                                        | means to wrap around. "raise" means to raise an error when |
|                                        | index out of                                               |
|                                        | range.                                                     |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/indexing_op.cc#L718

