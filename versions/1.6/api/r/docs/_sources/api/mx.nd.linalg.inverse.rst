

``mx.nd.linalg.inverse``
================================================

Description
----------------------

Compute the inverse of a matrix.
Input is a tensor *A* of dimension *n >= 2*.

If *n=2*, *A* is a square matrix. We compute:

*out* = *A*\ :sup:`-1`

If *n>2*, *inverse* is performed separately on the trailing two dimensions
for all inputs (batch mode).


.. note:: The operator supports float32 and float64 data types only.


**Example**::

	 
	 Single matrix inverse
	 A = [[1., 4.], [2., 3.]]
	 inverse(A) = [[-0.6, 0.8], [0.4, -0.2]]
	 
	 Batch matrix inverse
	 A = [[[1., 4.], [2., 3.]],
	 [[1., 3.], [2., 4.]]]
	 inverse(A) = [[[-0.6, 0.8], [0.4, -0.2]],
	 [[-2., 1.5], [1., -0.5]]]
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``A``                                  | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Tensor of square matrix                                    |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/la_op.cc#L919

