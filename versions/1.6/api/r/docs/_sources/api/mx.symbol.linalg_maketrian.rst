

``mx.symbol.linalg_maketrian``
============================================================

Description
----------------------

Constructs a square matrix with the input representing a specific triangular sub-matrix.
This is basically the inverse of *linalg.extracttrian*. Input is a tensor *A* of dimension *n >= 1*.

If *n=1*, then *A* represents the entries of a triangular matrix which is lower triangular if *offset<0* or *offset=0*, *lower=true*. The resulting matrix is derived by first constructing the square
matrix with the entries outside the triangle set to zero and then adding *offset*-times an additional 
diagonal with zero entries to the square matrix.

If *n>1*, then *A* represents a batch of triangular sub-matrices. The batch of corresponding square matrices is returned as an *n+1*-dimensional tensor.


.. note:: The operator supports float32 and float64 data types only.


**Example**::

	 
	 Single  matrix construction
	 A = [1.0, 2.0, 3.0]
	 
	 maketrian(A)              = [[1.0, 0.0],
	 [2.0, 3.0]]
	 
	 maketrian(A, lower=false) = [[1.0, 2.0],
	 [0.0, 3.0]]
	 
	 maketrian(A, offset=1)    = [[0.0, 1.0, 2.0],
	 [0.0, 0.0, 3.0],
	 [0.0, 0.0, 0.0]]
	 maketrian(A, offset=-1)   = [[0.0, 0.0, 0.0],
	 [1.0, 0.0, 0.0],
	 [2.0, 3.0, 0.0]]
	 
	 Batch matrix construction
	 A = [[1.0, 2.0, 3.0],
	 [4.0, 5.0, 6.0]]
	 
	 maketrian(A)           = [[[1.0, 0.0],
	 [2.0, 3.0]],
	 [[4.0, 0.0],
	 [5.0, 6.0]]]
	 
	 maketrian(A, offset=1) = [[[0.0, 1.0, 2.0],
	 [0.0, 0.0, 3.0],
	 [0.0, 0.0, 0.0]],
	 [[0.0, 4.0, 5.0],
	 [0.0, 0.0, 6.0],
	 [0.0, 0.0, 0.0]]]
	 
	 

Usage
----------

.. code:: r

	mx.symbol.linalg_maketrian(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``A``                                  | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Tensor of triangular matrices stored as vectors            |
+----------------------------------------+------------------------------------------------------------+
| ``offset``                             | int, optional, default='0'.                                |
|                                        |                                                            |
|                                        | Offset of the diagonal versus the main diagonal. 0         |
|                                        | corresponds to the main diagonal, a negative/positive      |
|                                        | value to diagonals below/above the main                    |
|                                        | diagonal.                                                  |
+----------------------------------------+------------------------------------------------------------+
| ``lower``                              | boolean, optional, default=1.                              |
|                                        |                                                            |
|                                        | Refer to the lower triangular matrix if lower=true, refer  |
|                                        | to the upper otherwise. Only relevant when                 |
|                                        | offset=0                                                   |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/la_op.cc#L673

