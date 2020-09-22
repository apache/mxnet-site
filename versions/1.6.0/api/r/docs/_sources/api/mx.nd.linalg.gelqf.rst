

``mx.nd.linalg.gelqf``
============================================

Description
----------------------

LQ factorization for general matrix.
Input is a tensor *A* of dimension *n >= 2*.

If *n=2*, we compute the LQ factorization (LAPACK *gelqf*, followed by *orglq*). *A*
must have shape *(x, y)* with *x <= y*, and must have full rank *=x*. The LQ
factorization consists of *L* with shape *(x, x)* and *Q* with shape *(x, y)*, so
that:

*A* = *L* \* *Q*

Here, *L* is lower triangular (upper triangle equal to zero) with nonzero diagonal,
and *Q* is row-orthonormal, meaning that

   *Q* \* *Q*\ :sup:`T`

is equal to the identity matrix of shape *(x, x)*.

If *n>2*, *gelqf* is performed separately on the trailing two dimensions for all
inputs (batch mode).


.. note:: The operator supports float32 and float64 data types only.


**Example**::

	 
	 Single LQ factorization
	 A = [[1., 2., 3.], [4., 5., 6.]]
	 Q, L = gelqf(A)
	 Q = [[-0.26726124, -0.53452248, -0.80178373],
	 [0.87287156, 0.21821789, -0.43643578]]
	 L = [[-3.74165739, 0.],
	 [-8.55235974, 1.96396101]]
	 
	 Batch LQ factorization
	 A = [[[1., 2., 3.], [4., 5., 6.]],
	 [[7., 8., 9.], [10., 11., 12.]]]
	 Q, L = gelqf(A)
	 Q = [[[-0.26726124, -0.53452248, -0.80178373],
	 [0.87287156, 0.21821789, -0.43643578]],
	 [[-0.50257071, -0.57436653, -0.64616234],
	 [0.7620735, 0.05862104, -0.64483142]]]
	 L = [[[-3.74165739, 0.],
	 [-8.55235974, 1.96396101]],
	 [[-13.92838828, 0.],
	 [-19.09768702, 0.52758934]]]
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``A``                                  | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Tensor of input matrices to be factorized                  |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/la_op.cc#L798

