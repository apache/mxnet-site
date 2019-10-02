

``mx.nd.linalg.makediag``
==================================================

Description
----------------------

Constructs a square matrix with the input as diagonal.
Input is a tensor *A* of dimension *n >= 1*.

If *n=1*, then *A* represents the diagonal entries of a single square matrix. This matrix will be returned as a 2-dimensional tensor.
If *n>1*, then *A* represents a batch of diagonals of square matrices. The batch of diagonal matrices will be returned as an *n+1*-dimensional tensor.


.. note:: The operator supports float32 and float64 data types only.


**Example**::

	 
	 Single diagonal matrix construction
	 A = [1.0, 2.0]
	 
	 makediag(A)    = [[1.0, 0.0],
	 [0.0, 2.0]]
	 
	 makediag(A, 1) = [[0.0, 1.0, 0.0],
	 [0.0, 0.0, 2.0],
	 [0.0, 0.0, 0.0]]
	 
	 Batch diagonal matrix construction
	 A = [[1.0, 2.0],
	 [3.0, 4.0]]
	 
	 makediag(A) = [[[1.0, 0.0],
	 [0.0, 2.0]],
	 [[3.0, 0.0],
	 [0.0, 4.0]]]
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``A``                                  | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Tensor of diagonal entries                                 |
+----------------------------------------+------------------------------------------------------------+
| ``offset``                             | int, optional, default='0'.                                |
|                                        |                                                            |
|                                        | Offset of the diagonal versus the main diagonal. 0         |
|                                        | corresponds to the main diagonal, a negative/positive      |
|                                        | value to diagonals below/above the main                    |
|                                        | diagonal.                                                  |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/la_op.cc#L547

